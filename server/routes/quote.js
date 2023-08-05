const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const QuoteController = require('../controllers/quoteController');

router.get('/', QuoteController.getAllQuotes);
router.get('/:id', QuoteController.getQuoteById);
router.post('/',
  body('email').isEmail(),
  body('phoneNumber').isLength({ min: 5 }),
  body('date').isISO8601(),
  QuoteController.createQuote
);
router.put('/:id', QuoteController.updateQuote);
router.delete('/:id', QuoteController.deleteQuote);

module.exports = router;
