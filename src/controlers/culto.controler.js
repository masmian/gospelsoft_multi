const Culto = require('../models/culto.model')

const getAllCults = async (req, res) => {
    const Cults = await Culto.findAll();
    res.json(Cults)
}

const getCult = async (req, res) => {
    const id = req.params.id;
    const Cult = await Culto.findByPk(id);
    if (!Cult) {
        return res.status(404).json({ msg: 'Culto no encontrado' });
    }
    res.json(Cult)

}

const registerCult = async (req, res) => {
    const { id_iglesia, fecha_culto, numero_culto } = req.body;
    const Cult = await Culto.create({
        id_iglesia:id_iglesia,
        fecha_culto:fecha_culto,
        numero_culto:numero_culto
        });
        res.json(Cult)
}

const editCult = async (req, res) => {
    const id = req.params.id;
    const { id_iglesia, fecha_culto, numero_culto } = req.body;
    const Cult = await Culto.findByPk(id);
    if (!Cult) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Cult.id_iglesia = id_iglesia;
    Cult.fecha_culto = fecha_culto;
    Cult.numero_culto = numero_culto;
    await Cult.save();
    res.json(Cult)

}

const changeCultState = async (req, res) => {
    const id = req.params.id;
    const Cult = await Culto.findByPk(id);
    if (!Cult) {
        return res.status(404).json({ msg: 'Culto no encontrado' });
    }
    Cult.estado = !Cult.estado;
    await Cult.save();
    res.json(Cult)
}


module.exports = {
    getAllCults,
    getCult, 
    registerCult,
    editCult
}