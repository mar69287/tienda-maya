const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, ordersCtrl.index);
router.post('/create', ensureLoggedIn, ordersCtrl.create);

module.exports = router;