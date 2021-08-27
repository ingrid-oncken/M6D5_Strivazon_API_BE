import express from "express"
import db from "../../db/models/tables_connection.js"

const categoriesRouter = express.Router()

const { Category } = db

categoriesRouter.route("/").get(async (req, res, next) => {
  try {
    console.log("HELLO WORLD")
  } catch (error) {
    next(error)
  }
})
// categoriesRouter.get("/", async (req, res, next) => {})
export default categoriesRouter
