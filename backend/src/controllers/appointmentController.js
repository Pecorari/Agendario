const appointmentModel = require('../models/appointmentModel');

const getAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.getAppointments();

    return res.status(200).json(appointments);
  } catch (error) {
    console.log('Erro em getAppointments controller', error);
    return res.status(500).json({ error: 'Erro ao listar agendamentos' });
  }
};

const addAppointment = async (req, res) => {
  try {
    const createdAppointment = await appointmentModel.addAppointment(req.body);

    return res.status(201).json(createdAppointment.insertId);
  } catch (error) {
    console.log('Erro em addAppointments controller', error);
    return res.status(500).json({ error: 'Erro ao adicionar agendamento' });
  }
};

const updtAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await appointmentModel.updtAppointment(id, req.body);

    return res.status(200).json({ mensage: "Agendamento alterado!" });
  } catch (error) {
    console.log('Erro em updtAppointments controller', error);
    return res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
};

const delAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await appointmentModel.delAppointment(id);

    return res.status(200).json({ mensage: "Agendamento deletado!" });
  } catch (error) {
    console.log('Erro em delAppointments controller', error);
    return res.status(500).json({ error: 'Erro ao deletar agendamento' });
  }
};

module.exports = {
  getAppointments,
  addAppointment,
  updtAppointment,
  delAppointment
};
