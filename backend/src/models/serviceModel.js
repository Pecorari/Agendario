const connection = require('../database/connection');

const getServices = async () => {
  const [services] = await connection.execute('SELECT * FROM services');

  return services;
};

const addService = async (dataService) => {
  const { name, price, duration } = dataService;

  const [createdService] = await connection.execute('INSERT INTO services(name, price, duration) VALUES (?, ?, ?)', [name, price, duration]);

  return createdService;
};

const updtService = async (idService, dataService) => {
  const { name, price, duration } = dataService;

  const [updatedService] = await connection.execute('UPDATE services SET name=?, price=?, duration=? WHERE id=?', [name, price, duration, idService]);

  return updatedService;
};

const delService = async (idService) => {
  const [deletedService] = await connection.execute('DELETE FROM services WHERE id=?', [idService]);

  return deletedService;
};

module.exports = {
  getServices,
  addService,
  updtService,
  delService
};
