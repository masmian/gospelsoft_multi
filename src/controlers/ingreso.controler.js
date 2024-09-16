const Ingreso = require('../models/ingresos.model')

const getAllIncomes = async (req, res) => {
    const Income = await Ingreso.findAll();
    res.json(Income)
}

const getIncome = async (req, res) => {
    const id = req.params.id;
    const Income = await Ingreso.findByPk(id);
    if (!Income) {
        return res.status(404).json({ msg: 'Ingreso no encontrado' });
    }
    res.json(Income)
}

const registerIncome = async (req, res) => {
    const { fecha_ingreso, monto, tipo_ingreso, moneda, descripcion, id_culto, usuario_registra } = req.body;
    const Income = await Ingreso.create({
        fecha_ingreso:fecha_ingreso,
        monto:monto,
        tipo_ingreso:tipo_ingreso,
        moneda:moneda,
        descripcion:descripcion,
        id_culto:id_culto,
        usuario_registra:usuario_registra
        });
        res.json(Income)
}

const editIncome = async (req, res) => {
    const id = req.params.id;
    const { fecha_ingreso, monto, tipo_ingreso, moneda, descripcion, id_culto, usuario_edita } = req.body;
    const Income = await Ingreso.findByPk(id);
    if (!Income) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Income.fecha_ingreso = fecha_ingreso;
    Income.monto = monto;
    Income.tipo_ingreso = tipo_ingreso;
    Income.moneda = moneda;
    Income.descripcion = descripcion;
    Income.id_culto = id_culto;
    Income.usuario_edita = usuario_edita;
    await Income.save();
    res.json(Income)

}

module.exports = {
    getAllIncomes,
    getIncome, 
    registerIncome,
    editIncome
}