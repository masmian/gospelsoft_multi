const Miembro = require('../models/miembro.model')

const getAllMembers = async (req, res) => {
    const Member = await Miembro.findAll();
    res.json(Member)
}

const getMember = async (req, res) => {
    const id = req.params.id;
    const Member = await Miembro.findByPk(id);
    if (!Member) {
        return res.status(404).json({ msg: 'Miembro no encontrada' });
    }
    res.json(Member)

}

const registerMember = async (req, res) => {
    const { nombre, direccion, cedula, estado_civil, sexo,fecha_nacimiento, fecha_bautismo, telefono, usuario_registra } = req.body;
    const Member = await Miembro.create({
        nombre:nombre,
        direccion:direccion===""?null:direccion,
        cedula:cedula===""?null:cedula,
        estado_civil:estado_civil,
        sexo:sexo,
        fecha_nacimiento:fecha_nacimiento,
        fecha_bautismo:fecha_bautismo==""?null:fecha_bautismo,
        telefono:telefono===""?null:telefono,
        usuario_registra:usuario_registra
        });
    res.json(Member)
}

const editMember = async (req, res) => {
    const id = req.params.id;
    const { nombre, direccion, cedula, estado_civil, sexo, fecha_nacimiento, fecha_bautismo, telefono, usuario_edita } = req.body;
    const Member = await Miembro.findByPk(id);
    if (!Member) {
        return res.status(404).json({ msg: 'Miembro no encontrada' });
    }
    Member.nombre = nombre;
    Member.direccion = direccion===""?null:direccion;
    Member.cedula = cedula===""?null:cedula;
    Member.estado_civil = estado_civil;
    Member.sexo = sexo;
    Member.fecha_nacimiento = fecha_nacimiento;
    Member.fecha_bautismo = fecha_bautismo===""?null:fecha_nacimiento;
    Member.telefono = telefono===""?null:telefono;
    Member.usuario_edita = usuario_edita;
    await Member.save();
    res.json(Member)

}

const changeMemberstate = async (req, res) => {
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
    getAllMembers,
    getMember, 
    registerMember,
    editMember,
    changeMemberstate
}