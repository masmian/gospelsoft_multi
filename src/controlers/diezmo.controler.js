const Diezmo = require('../models/diezmo.model')

const getAllTithes = async (req, res) => {
    const Tithe = await Diezmo.findAll();
    res.json(Tithe)
}

const getTithe = async (req, res) => {
    const id = req.params.id;
    const Tithe = await Diezmo.findByPk(id);
    if (!Tithe) {
        return res.status(404).json({ msg: 'Diezmo no encontrado' });
    }
    res.json(Tithe)
}

const registerTithe = async (req, res) => {
    const { diezmador, monto, culto, moneda, usuario_registra } = req.body;
    const Tithe = await Diezmo.create({
        diezmador:diezmador,
        monto:monto,
        culto:culto,
        moneda:moneda,
        usuario_registra:usuario_registra
        });
        res.json(Tithe)
}

const editTithe = async (req, res) => {
    const id = req.params.id;
    const { diezmador, monto, culto, moneda, usuario_edita } = req.body;
    const Tithe = await Diezmo.findByPk(id);
    if (!Tithe) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Tithe.diezmador = diezmador;
    Tithe.monto = monto;
    Tithe.culto = culto;
    Tithe.moneda = moneda;
    Tithe.usuario_edita = usuario_edita;
    await Tithe.save();
    res.json(Tithe)

}

module.exports = {
    getAllTithes,
    getTithe, 
    registerTithe,
    editTithe
}