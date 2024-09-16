const Diezmador = require('../models/diezmador.model')

const getAllDecimators = async (req, res) => {
    const Decimator = await Diezmador.findAll();
    res.json(Decimator)
}

const getDecimator = async (req, res) => {
    const id = req.params.id;
    const Decimator = await Diezmador.findByPk(id);
    if (!Decimator) {
        return res.status(404).json({ msg: 'Diezmador no encontrado' });
    }
    res.json(Decimator)

}

const registerDecimator = async (req, res) => {
    const { id_iglesia, nombre, usuario_registra } = req.body;
    const Decimator = await Diezmador.create({
        id_iglesia:id_iglesia,
        nombre:nombre,
        usuario_registra:usuario_registra
        });
        res.json(Decimator)
}

const editDecimator = async (req, res) => {
    const id = req.params.id;
    const { id_iglesia, nombre, usuario_edita } = req.body;
    const Decimator = await Diezmador.findByPk(id);
    if (!Decimator) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Decimator.id_iglesia = id_iglesia;
    Decimator.nombre = nombre;
    Decimator.usuario_edita = usuario_edita;
    await Decimator.save();
    res.json(Decimator)

}

module.exports = {
    getAllDecimators,
    getDecimator, 
    registerDecimator,
    editDecimator
}