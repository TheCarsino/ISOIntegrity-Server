import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Role from "./Role.js";
import UnitArea from "./UnitArea.js";
import User from "./User.js";

const UserRoleUnit = sequelize.define(
  "UserRoleUnit",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Role",
        key: "id",
      },
    },
    unit_area_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "UnitArea",
        key: "id",
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ultima_modificacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "User_X_Role_X_Unit",
    timestamps: false, // Disable automatic timestamps
  }
);

UserRoleUnit.belongsTo(User, { foreignKey: "user_id" });
UserRoleUnit.belongsTo(Role, { foreignKey: "role_id" });
UserRoleUnit.belongsTo(UnitArea, { foreignKey: "unit_area_id" });

export default UserRoleUnit;
