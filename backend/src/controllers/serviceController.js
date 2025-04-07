const serviceModel = require('../models/serviceModel');

const getServices = async (req, res) => {
  try {
    const services = await serviceModel.getServices();
    
    return res.status(200).json(services);
  } catch (error) {
    console.log('Erro em getServices controller', error);
    return res.status(500).json({ error: 'Erro ao listar serviços' });
  }
}

const addService = async (req, res) => {
  try {
    const createdService = await serviceModel.addService(req.body);

    return res.status(201).json(createdService.insertId);
  } catch (error) {
    console.error('Erro em addService:', error);
    return res.status(500).json({ error: 'Erro ao adicionar serviço' });
  }
}

const updtService = async (req, res) => {
  try {
    const { id } = req.params;

    await serviceModel.updtService(id, req.body);

    return res.status(204).json();
  } catch (error) {
    console.error('Erro em updtService:', error);
    return res.status(500).json({ error: 'Erro ao atualizar serviço' });
  }
}

const delService = async (req, res) => {
  try {
    const { id } = req.params;

    await serviceModel.delService(id);

    return res.status(204).json();
  } catch (error) {
    console.error('Erro em delService:', error);
    return res.status(500).json({ error: 'Erro ao deletar serviço' });
  }
}

module.exports = {
  getServices,
  addService,
  updtService,
  delService
};
