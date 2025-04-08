const express = require('express');
const serviceController = require('./controllers/serviceController');
const appointmentController = require('./controllers/appointmentController');
const professionalController = require('./controllers/ProfessionalController');

const authMiddleware = require('./middlewares/authMiddleware');

const router = express.Router();

router.post('/register', professionalController.registerProfessional);
router.post('/login', professionalController.loginProfessional);

router.get('/services', authMiddleware.validation, serviceController.getServices);
router.post('/services/add-service', authMiddleware.validation, serviceController.addService);
router.put('/services/updt-service/:id', authMiddleware.validation, serviceController.updtService);
router.delete('/services/del-service/:id', authMiddleware.validation, serviceController.delService);

router.get('/appointments', authMiddleware.validation, appointmentController.getAppointments);
router.post('/appointments/add-appointment', authMiddleware.validation, appointmentController.addAppointment);
router.put('/appointments/updt-appointment/:id', authMiddleware.validation, appointmentController.updtAppointment);
router.delete('/appointments/del-appointment/:id', authMiddleware.validation, appointmentController.delAppointment);

module.exports = router;
