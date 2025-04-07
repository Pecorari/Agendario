const express = require('express');
const serviceController = require('./controllers/serviceController');
const appointmentController = require('./controllers/appointmentController');

const router = express.Router();

router.get('/services', serviceController.getServices);
router.post('/services/add-service', serviceController.addService);
router.put('/services/updt-service/:id', serviceController.updtService);
router.delete('/services/del-service/:id', serviceController.delService);

router.get('/appointments', appointmentController.getAppointments);
router.post('/appointments/add-appointment', appointmentController.addAppointment);
router.put('/appointments/updt-appointment/:id', appointmentController.updtAppointment);
router.delete('/appointments/del-appointment/:id', appointmentController.delAppointment);

module.exports = router;
