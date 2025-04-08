const connection = require('../database/connection');

const addProfessional = async (dataProfessional, password_hashed) => {
  const {name, email} = dataProfessional;

  const [result] = await connection.execute('INSERT INTO professionals(name, email, password_hashed) VALUES  (?, ?, ?)', [name, email, password_hashed]);

  const [professional] = await connection.execute('SELECT * FROM professionals WHERE id = ?', [result.insertId]);

  return professional[0];
};

const getProfessional = async (email) => {
  const [professional] = await connection.execute('SELECT * FROM professionals WHERE email = ?', [email]);

  return professional[0];
};

module.exports = {
  addProfessional,
  getProfessional
}
