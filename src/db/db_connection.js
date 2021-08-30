import { Sequelize } from "sequelize"

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
})

export const syncSequelize = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })

    console.log("📚 DataBase authenticated")
  } catch (error) {
    console.log(error)
  }
}

export default sequelize

// - User.sync() - Esto crea la tabla si no existe (y no hace nada si ya existe)
// - User.sync({ force: true }) - Esto crea la tabla, soltándola primero si ya existía , se pierde la informacion
// - User.sync({ alter: true }) - Esto verifica cuál es el estado actual de la tabla en la base de datos
//   (qué columnas tiene, cuáles son sus tipos de datos, etc.), y luego realiza los cambios necesarios en
//   la tabla para que coincida con el modelo. no se pierde la informacion
