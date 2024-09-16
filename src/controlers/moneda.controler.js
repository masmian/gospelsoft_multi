const Moneda = require('../models/moneda.model')

const getAllCurrencies = async (req, res) => {
    const Currency = await Moneda.findAll();
    res.json(Currency)
}

const getCurrency = async (req, res) => {
    const id = req.params.id;
    const Currency = await Moneda.findByPk(id);
    if (!Currency) {
        return res.status(404).json({ msg: 'Moneda no encontrado' });
    }
    res.json(Currency)

}

const registerCurrency = async (req, res) => {
    const { moneda } = req.body;
    const Currency = await Moneda.create({
        moneda:moneda
        });
        res.json(Currency)
}

const editCurrency = async (req, res) => {
    const id = req.params.id;
    const { moneda } = req.body;
    const Currency = await Moneda.findByPk(id);
    if (!Currency) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Currency.moneda = moneda;
    await Currency.save();
    res.json(Currency)

}

module.exports = {
    getAllCurrencies,
    getCurrency, 
    registerCurrency,
    editCurrency
}