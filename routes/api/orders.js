const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders')

router.get('/', ordersCtrl.index);
router.post('/create', ordersCtrl.create);

module.exports = router;