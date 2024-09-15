const TipoUsuario = require('../models/tipoUsuario.model')

const getAllUserTypes = async (req, res) => {
    const TipoUsuarios = await TipoUsuario.findAll();
    res.json(TipoUsuarios)
}

const getUserType = async (req, res) => {
    const id = req.params.id;
    const Tipo_Usuario = await TipoUsuario.findByPk(id);
    if (!Tipo_Usuario) {
        return res.status(404).json({ msg: 'TipoUsuario no encontrado' });
    }
    res.json(Tipo_Usuario)

}

const registerUserType = async (req, res) => {
    const { tipo_usuario } = req.body;
    const Tipo_Usuario = await TipoUsuario.create({
        tipoUsuario:tipo_usuario
        });
        res.json(Tipo_Usuario)
}

const editUserType = async (req, res) => {
    const id = req.params.id;
    const { tipo_usuario } = req.body;
    const Tipo_Usuario = await TipoUsuario.findByPk(id);
    if (!Tipo_Usuario) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    Tipo_Usuario.tipoUsuario = tipo_usuario;
    await Tipo_Usuario.save();
    res.json(Tipo_Usuario)

}

const deleteUserType = async (req, res) => {
    const id = req.params.id;
    const Tipo_Usuario = await TipoUsuario.destroy({
        where: {
            tipoUsuario_id: id,
          },
    });
    if (!Tipo_Usuario) {
        return res.status(404).json({ msg: 'Tipo de usuario no encontrada' });
    }
    res.json(Tipo_Usuario)

}

module.exports = {
    getAllUserTypes,
    getUserType, 
    registerUserType,
    editUserType,
    deleteUserType
}