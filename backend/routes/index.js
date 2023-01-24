const router = require('express').Router();
const NotFoundError = require('../errors/not-found-error');
const usersRoutes = require('./users');
const cardsRoutes = require('./cards');
const auth = require('../middlewares/auth');

const { createUser, login } = require('../controllers/user');
const { validateUser, validateUserLogin } = require('../utils/validations/user-validation');

router.post('/signup', validateUser, createUser);
router.post('/signin', validateUserLogin, login);
router.use('/users', auth, usersRoutes);
router.use('/cards', auth, cardsRoutes);
router.use('*', auth, () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
