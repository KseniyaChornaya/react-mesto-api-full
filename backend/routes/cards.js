const router = require('express').Router();
const {
  getCards,
  createCards,
  deleteCards,
  dislikeCard,
  likeCard,
} = require('../controllers/card');
const { validateCardInfo, validateCardId } = require('../utils/validations/card-validation');

router.get('/', getCards);
router.post('/', validateCardInfo, createCards);
router.delete('/:cardId', validateCardId, deleteCards);
router.put('/:cardId/likes', validateCardId, likeCard);
router.delete('/:cardId/likes', validateCardId, dislikeCard);

module.exports = router;
