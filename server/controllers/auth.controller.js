import User from "../models/User.js";
import Role from "../models/Role.js";
import UnitArea from "../models/UnitArea.js";
import UserRoleUnit from "../models/UserRoleUnit.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "usuario", "nombres", "apellidos", "correo"],
      where: {
        activo: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUserbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      attributes: ["id", "usuario", "nombres", "apellidos", "correo"],
      where: {
        id,
        activo: true,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  const { usuario, contrasena, nombres, apellidos, correo } = req.body;
  try {
    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);
    let newUser = await User.create(
      {
        usuario,
        contrasena: hashedPassword,
        nombres,
        apellidos,
        correo,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "usuario",
          "contrasena",
          "nombres",
          "apellidos",
          "correo",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );

    return res.json({
      usuario: newUser.usuario,
      nombres: newUser.nombres,
      apellidos: newUser.apellidos,
      correo: newUser.correo,
      fecha_creacion: newUser.fecha_creacion,
      ultima_modificacion: newUser.ultima_modificacion,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario, contrasena, nombres, apellidos, correo } = req.body;

    const user = await User.findByPk(id);
    if (usuario != null) user.usuario = usuario;
    if (contrasena != null) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(contrasena, salt);

      user.contrasena = hashedPassword;
    }
    if (nombres != null) user.nombres = nombres;
    if (apellidos != null) user.apellidos = apellidos;
    if (correo != null) user.correo = correo;
    user.ultima_modificacion = new Date().getTime();
    await user.save();

    res.json({
      usuario: user.usuario,
      nombres: user.nombres,
      apellidos: user.apellidos,
      correo: user.correo,
      ultima_modificacion: user.ultima_modificacion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    user.ultima_modificacion = new Date().getTime();
    user.activo = false;
    await user.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRole = async (req, res) => {
  try {
    const roles = await Role.findAll({
      where: {
        activo: true,
      },
    });
    res.json(roles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getRolebyId = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      where: {
        id,
        activo: true,
      },
    });
    res.json(role);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createRole = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    let newRole = await Role.create(
      {
        nombre,
        descripcion,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "nombre",
          "descripcion",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );
    return res.json(newRole);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const role = await Role.findByPk(id);
    role.nombre = nombre;
    role.descripcion = descripcion;
    role.ultima_modificacion = new Date().getTime();
    await role.save();

    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    role.ultima_modificacion = new Date().getTime();
    role.activo = false;
    await role.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserPermission = async (req, res) => {
  const { id } = req.params;
  try {
    const userPermission = await UserRoleUnit.findAll({
      attributes: ["id", "user_id", "role_id", "unit_area_id"],
      include: [
        {
          model: User,
          attributes: ["usuario", "nombres", "apellidos", "correo"],
          where: { activo: 1 },
        },
        {
          model: Role,
          attributes: ["nombre", "descripcion"],
          where: { activo: 1 },
        },
        {
          model: UnitArea,
          attributes: ["codigo", "nombre"],
          where: { activo: 1 },
          required: false, // LEFT JOIN
        },
      ],
      where: {
        user_id: id,
        activo: 1,
      },
    });
    res.json(userPermission);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createUserPermission = async (req, res) => {
  const { user_id, role_id, unit_area_id } = req.body;
  try {
    const userPermission = await UserRoleUnit.findAll({
      where: {
        user_id,
        activo: true,
      },
    });
    for (let i = 0; i < userPermission.length; i++) {
      if (userPermission[i].role_id !== role_id)
        return res.json("Can't insert a permission for a different role");
      if (userPermission[i].unit_area_id == null)
        return res.json(
          "Can't insert an unit_area_id if the user already has global permissions"
        );
      if (userPermission[i].unit_area_id === unit_area_id)
        return res.json("Can't insert the same permission");
    }
    let newUserPermission = await UserRoleUnit.create(
      {
        user_id,
        role_id,
        unit_area_id,
        fecha_creacion: new Date().getTime(),
        ultima_modificacion: new Date().getTime(),
        activo: true,
      },
      {
        fields: [
          "user_id",
          "role_id",
          "unit_area_id",
          "fecha_creacion",
          "ultima_modificacion",
          "activo",
        ],
      }
    );
    return res.json(newUserPermission);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUserPernission = async (req, res) => {
  const { id } = req.params;
  try {
    const userPermission = await UserRoleUnit.findByPk(id);
    userPermission.ultima_modificacion = new Date().getTime();
    userPermission.activo = false;
    await userPermission.save();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const authenticateUser = async (req, res) => {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  try {
    const user = await User.findOne({
      where: { usuario: usuario, activo: true },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isContrasenaValid = await bcrypt.compare(
      contrasena,
      user.contrasena.toString("utf-8")
    );

    if (!isContrasenaValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const userAuthenticated = await UserRoleUnit.findAll({
      attributes: ["id", "user_id", "role_id", "unit_area_id"],
      include: [
        {
          model: User,
          attributes: ["usuario", "nombres", "apellidos", "correo"],
          where: { activo: 1 },
        },
        {
          model: Role,
          attributes: ["nombre", "descripcion"],
          where: { activo: 1 },
        },
        {
          model: UnitArea,
          attributes: ["codigo", "nombre"],
          where: { activo: 1 },
          required: false, // LEFT JOIN
        },
      ],
      where: {
        user_id: user.id,
        activo: 1,
      },
    });
    return res.json(userAuthenticated);
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
