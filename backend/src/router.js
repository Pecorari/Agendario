const express = require('express');
const serviceController = require('./controllers/serviceController');

const router = express.Router();

router.get('/services', serviceController.getServices);
router.post('/services/add-service', serviceController.addService);
router.put('/services/updt-service/:id', serviceController.updtService);
router.delete('/services/del-service/:id', serviceController.delService);

module.exports = router;
