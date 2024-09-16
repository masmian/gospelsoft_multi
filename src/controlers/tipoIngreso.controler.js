const TipoIngreso = require('../models/tipoIngreso.model')

const getAllIncomeTypes = async (req, res) => {
    const IncomeTypes = await TipoIngreso.findAll();
    res.json(IncomeTypes)
}

const getIncomeType = async (req, res) => {
    const id = req.params.id;
    const IncomeType = await TipoIngreso.findByPk(id);
    if (!IncomeType) {
        return res.status(404).json({ msg: 'TipoIngreso no encontrado' });
    }
    res.json(IncomeType)

}

const registerIncomeType = async (req, res) => {
    const { tipo_ingreso } = req.body;
    console.log(tipo_ingreso)
    const IncomeType = await TipoIngreso.create({
        tipoIngreso:tipo_ingreso
        });
        res.json(IncomeType)
}

const editIncomeType = async (req, res) => {
    const id = req.params.id;
    const { tipo_usuario } = req.body;
    const IncomeType = await TipoIngreso.findByPk(id);
    if (!IncomeType) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Tipo_Usuario.tipoIngreso = tipo_usuario;
    await IncomeType.save();
    res.json(IncomeType)

}

const deleteIncomeType = async (req, res) => {
    const id = req.params.id;
    const IncomeType = await TipoIngreso.destroy({
        where: {
            tipoIngreso_id: id,
          },
    });
    if (!IncomeType) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    res.json(IncomeType)

}

module.exports = {
    getAllIncomeTypes,
    getIncomeType, 
    registerIncomeType,
    editIncomeType,
    deleteIncomeType
}