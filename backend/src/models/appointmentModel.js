const connection = require('../database/connection');

const getAppointments = async () => {
  const [appointments] = await connection.execute('SELECT * FROM appointments');

  return appointments;
};

const addAppointment = async (dataApoointment) => {
  const { idService, client_name, client_phone, date_time } = dataApoointment;

  const [createdAppointment] = await connection.execute('INSERT INTO appointments (idService, client_name, client_phone, date_time) VALUES (?, ?, ?, ?)', [idService, client_name, client_phone, date_time]);

  return createdAppointment;
};

const updtAppointment = async (idAppointment, dataApoointment) => {
  const { client_name, client_phone, date_time } = dataApoointment;

  const [updtAppointment] = await connection.execute('UPDATE appointments SET client_name=?, client_phone=?, date_time=? WHERE id=?', [client_name, client_phone, date_time, idAppointment]);

  return updtAppointment;
};

const delAppointment = async (idAppointment) => {
  const [deletedAppointment] = await connection.execute('DELETE FROM appointments WHERE id = ?', [idAppointment]);

  return deletedAppointment;
};

module.exports = {
  getAppointments,
  addAppointment,
  updtAppointment,
  delAppointment
};
