import s from "sequelize"
import sequelize from "../db_connection.js"

const { DataTypes } = s

const Category = sequelize.define("category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
})
export default Category
