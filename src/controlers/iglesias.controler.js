const Iglesia = require('../models/model.iglesia')

const getAllChurches = async (req, res) => {
    const iglesias = await Iglesia.findAll();
    res.json(iglesias)
}

const getChurch = async (req, res) => {
    const id = req.params.id;
    const iglesia = await Iglesia.findByPk(id);
    if (!iglesia) {
        return res.status(404).json({ msg: 'Iglesia no encontrada' });
    }
    res.json(iglesia)

}

const registerChurch = async (req, res) => {
    const { nombre, direccion, telefono, logo, pastor } = req.body;
    const iglesia = await Iglesia.create({
        nombre,
        direccion,
        telefono,
        logo,
        pastor
        });
        res.json(iglesia)
}

const editChurch = async (req, res) => {
    const id = req.params.id;
    const { nombre, direccion, telefono, logo, pastor } = req.body;
    const iglesia = await Iglesia.findByPk(id);
    if (!iglesia) {
        return res.status(404).json({ msg: 'Iglesia no encontrada' });
    }
    iglesia.nombre = nombre;
    iglesia.direccion = direccion;
    iglesia.telefono = telefono;
    iglesia.logo = logo;
    iglesia.pastor = pastor;
    await iglesia.save();
    res.json(iglesia)

}

const deactivateChurch = async (req, res) => {
    const id = req.params.id;
    const iglesia = await Iglesia.findByPk(id);
    if (!iglesia) {
        return res.status(404).json({ msg: 'Iglesia no encontrada' });
    }
    iglesia.estado = false;
    await iglesia.save();
    res.json(iglesia)
}

module.exports = {
    getAllChurches,
    getChurch, 
    registerChurch,
    editChurch,
    deactivateChurch
}