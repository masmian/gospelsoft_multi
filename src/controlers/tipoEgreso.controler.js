const TipoEgreso = require('../models/TipoEgreso.model')

const getAllOutputTypes = async (req, res) => {
    const OutputTypes = await TipoEgreso.findAll();
    res.json(OutputTypes)
}

const getOutputType = async (req, res) => {
    const id = req.params.id;
    const OutputType = await TipoEgreso.findByPk(id);
    if (!OutputType) {
        return res.status(404).json({ msg: 'TipoEgreso no encontrado' });
    }
    res.json(OutputType)

}

const registerOutputType = async (req, res) => {
    const { tipo_egreso } = req.body;
    const OutputType = await TipoEgreso.create({
        tipoEgreso:tipo_egreso
        });
        res.json(OutputType)
}

const editOutputType = async (req, res) => {
    const id = req.params.id;
    const { tipo_egreso } = req.body;
    const OutputType = await TipoEgreso.findByPk(id);
    if (!OutputType) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Tipo_Usuario.tipoEgreso = tipo_egreso;
    await OutputType.save();
    res.json(OutputType)

}

const changeOutputTypeState = async (req, res) => {
    const id = req.params.id;
    const Member = await Miembro.findByPk(id);
    if (!Member) {
        return res.status(404).json({ msg: 'Miembro no encontrada' });
    }
    Member.estado = !Member.estado;
    await Member.save();
    res.json(Member)
}

module.exports = {
    getAllOutputTypes,
    getOutputType, 
    registerOutputType,
    editOutputType,
    changeOutputTypeState
}