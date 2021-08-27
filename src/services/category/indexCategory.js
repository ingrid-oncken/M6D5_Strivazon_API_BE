import express from "express"
import db from "../../db/models/tables_connection.js"

const categoriesRouter = express.Router()

const { Category } = db

categoriesRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const getAll = await Category.findAll()

      res.send(getAll)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    const createOneCategory = await Category.create(req.body)

    res.send(createOneCategory)
  })

categoriesRouter.route("/:id").get(async (req, res, next) => {
  try {
    const getOneCat = await Category.findByPk(req.params.id)

    if (getOneCat === null) {
      res
        .status(404)
        .send(`The category with the id ${req.params.id} was not found`)
    } else {
      console.log(category instanceof Category)
    }
  } catch (error) {
    next(error)
  }
})
export default categoriesRouter
