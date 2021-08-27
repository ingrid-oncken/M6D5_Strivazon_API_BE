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
    await sequelize.sync({ force: true })

    console.log("📚 DataBase authenticated")
  } catch (error) {
    console.log(error)
  }
}

export default sequelize
