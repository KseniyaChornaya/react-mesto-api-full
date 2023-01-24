const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET, NODE_ENV } = process.env;
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');
const ConflictError = require('../errors/conflict-error');
const BadRequestError = require('../errors/bad-request-error');

module.exports.login = (req, res, next) => User
  .findUserByCredentials(req.body.email, req.body.password)
  .then((user) => {
    const userToken = jwt
      .sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev_secret', { expiresIn: '7d' });
    res
      .send({ userToken });
  }).catch((err) => {
    next(err);
  });

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar,
      email: req.body.email,
      password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        user: {
          email: user.email,
          name: user.name,
          about: user.about,
          avatar: user.avatar,
        },
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Такой пользователь уже существует'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError('Отправлены некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports.getUsers = (_, res, next) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(next);
};

module.exports.getUserMe = (req, res, next) => {
  User.findOne({ _id: req.user._id })
    .orFail(new NotFoundError('Пользователь не найден'))
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new NotFoundError('Пользователь не найден'))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Отправлены некорректные данные'));
      } else {
        next(err);
      }
    });
};

const updateUser = (req, res, next, userInfo) => {
  User.findByIdAndUpdate(req.user._id, userInfo, {
    new: true,
    runValidators: true,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Отправлены некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const userInfo = {
    name: req.body.name,
    about: req.body.about,
  };
  updateUser(req, res, next, userInfo);
};

module.exports.updateUserAvatar = (req, res, next) => {
  const userInfo = {
    avatar: req.body.avatar,
  };
  updateUser(req, res, next, userInfo);
};
