const router = require('express').Router();

const {
  getUsers,
  getUserById,
  getUserMe,
  updateUser,
} = require('../controllers/user');
const { validateUserId, validateUserInfo, validateUserAvatar } = require('../utils/validations/user-validation');

router.get('/', getUsers);
router.get('/me', getUserMe);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateUserInfo, updateUser);
router.patch('/me/avatar', validateUserAvatar, updateUser);

module.exports = router;
