const Usuario = require('../models/usuario.model')

const getAllUsers = async (req, res) => {
    const Usuarios = await Usuario.findAll();
    res.json(Usuarios)
}

const getUser = async (req, res) => {
    const id = req.params.id;
    const User = await Usuario.findByPk(id);
    if (!User) {
        return res.status(404).json({ msg: 'Usuario no encontrada' });
    }
    res.json(User)

}

const registerUser = async (req, res) => {
    const { nombre, username, passwd, email, tipo_usuario_id } = req.body;
    const User = await Usuario.create({
        nombre,
        username,
        passwd,
        email,
        tipo_usuario_id
        });
        res.json(User)
}

const editUser = async (req, res) => {
    const id = req.params.id;
    const { nombre, username, email, tipo_usuario_id } = req.body;
    const User = await Usuario.findByPk(id);
    if (!User) {
        return res.status(404).json({ msg: 'Usuario no encontrada' });
    }
    User.nombre = nombre;
    User.username = username;
    User.email = email;
    User.tipo_usuario_id = tipo_usuario_id;
    await User.save();
    res.json(User)

}

const changeUserState = async (req, res) => {
    const id = req.params.id;
    const User = await Usuario.findByPk(id);
    if (!User) {
        return res.status(404).json({ msg: 'Usuario no encontrada' });
    }
    User.estado = !User.estado;
    await User.save();
    res.json(User)
}

module.exports = {
    getAllUsers,
    getUser, 
    registerUser,
    editUser,
    changeUserState
}