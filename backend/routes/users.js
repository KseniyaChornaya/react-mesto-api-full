const router = require('express').Router();

const {
  getUsers,
  getUserById,
  getUserMe,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/user');
const { validateUserId, validateUserInfo, validateUserAvatar } = require('../utils/validations/user-validation');

router.get('/', getUsers);
router.get('/me', getUserMe);
router.get('/:userId', validateUserId, getUserById);
router.patch('/me', validateUserInfo, updateUserInfo);
router.patch('/me/avatar', validateUserAvatar, updateUserAvatar);

module.exports = router;
