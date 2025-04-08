const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const validation = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Token não informado' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = {
  validation
};
