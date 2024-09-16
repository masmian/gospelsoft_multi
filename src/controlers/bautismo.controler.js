const Bautismo = require('../models/bautismo.model')

const getAllBaptisms = async (req, res) => {
    const Baptism = await Bautismo.findAll();
    res.json(Baptism)
}

const getBaptism = async (req, res) => {
    const id = req.params.id;
    const Baptism = await Bautismo.findByPk(id);
    if (!Baptism) {
        return res.status(404).json({ msg: 'Bautismo no encontrado' });
    }
    res.json(Baptism)

}

const registerBaptism = async (req, res) => {
    const { nombre, cedula, fecha_conversion, fecha_bautismo, sexo, oficia, usuario_registra } = req.body;
    const Baptism = await Bautismo.create({
        nombre:nombre,
        cedula:cedula===""?null:cedula,
        fecha_conversion:fecha_conversion,
        fecha_bautismo:fecha_bautismo==""?null:fecha_bautismo,
        sexo:sexo,
        oficia:oficia,
        usuario_registra:usuario_registra
        });
    res.json(Baptism)
}

const editBaptism = async (req, res) => {
    const id = req.params.id;
    const { nombre, cedula, fecha_conversion, fecha_bautismo, sexo, oficia, usuario_edita } = req.body;
    const Baptism = await Bautismo.findByPk(id);
    if (!Baptism) {
        return res.status(404).json({ msg: 'Bautismo no encontrada' });
    }
    Baptism.nombre = nombre;
    Baptism.cedula = cedula===""?null:cedula;
    Baptism.fecha_conversion = fecha_conversion;
    Baptism.fecha_bautismo = fecha_bautismo===""?null:fecha_nacimiento;
    Baptism.sexo = sexo;
    Baptism.oficia = oficia;
    Baptism.usuario_edita = usuario_edita;
    await Baptism.save();
    res.json(Baptism)

}

const deleteBaptism = async (req, res) => {
    const id = req.params.id;
    const Baptism = await Bautismo.destroy({
        where: {
            tipoIngreso_id: id,
          },
    });
    if (!Baptism) {
        return res.status(404).json({ msg: 'Bautismo no encontrada' });
    }
    res.json(Baptism)
}

module.exports = {
    getAllBaptisms,
    getBaptism, 
    registerBaptism,
    editBaptism,
    deleteBaptism
}