const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:userId', accountController.getUserAccount);
router.put('/:userId', accountController.updateUserAccount);

module.exports = router;
