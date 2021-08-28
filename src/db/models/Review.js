import sequelize from "../db_connection.js"
import s from "sequelize"

const { DataTypes } = s

const Review = sequelize.define("review", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
export default Review
