const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const professionalModel = require('../models/professionalModel');

const SECRET = process.env.JWT_SECRET;

const registerProfessional = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exist = await professionalModel.getProfessional(email);
    if (exist) return res.status(400).json({ message: 'Email já cadastrado' });

    const password_hashed = await bcrypt.hash(password, 10);
    const user = await professionalModel.addProfessional(req.body, password_hashed);

    return res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao registrar', error: error.message });
  }
};

const loginProfessional = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await professionalModel.getProfessional(email);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    const valid = await bcrypt.compare(password, user.password_hashed);
    if (!valid) return res.status(401).json({ message: 'Senha incorreta' });


    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email }});
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao logar', error: error.message});
  }
};

module.exports ={
  registerProfessional,
  loginProfessional
};
