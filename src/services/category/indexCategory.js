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

categoriesRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const getOneCat = await Category.findByPk(req.params.id)
      res.send(getOneCat)
    } catch (error) {
      next(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const updateCategory = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      })

      res.send(updateCategory)
    } catch (error) {
      next(error)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const delOneCat = await Category.destroy({
        where: {
          id: req.params.id,
        },
      })
      if (delOneCat > 0) {
        res.send(`The category with id ${req.params.id} was deleted sucessfuly`)
      } else {
        res.status(404).send(`Id not found`)
      }
    } catch (error) {
      next(error)
    }
  })
export default categoriesRouter
