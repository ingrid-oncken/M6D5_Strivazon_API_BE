import db from "../../db/models/tables_connection.js"
import express from "express"

const productsRouter = express.Router()
const { Product } = db

productsRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const getAll = await Product.findAll()

      res.send(getAll)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const createProduct = await Product.create(req.body)

      res.send(createProduct)
    } catch (error) {
      next(error)
    }
  })

productsRouter.route("/:id").get(async (req, res, next) => {
  try {
    const getOne = await Product.findByPk(req.param.id)

    res.send(getOne)
    // getOne
    //   ? res.send(getOne)
    //   : res.send(`The product with id ${req.params.id} was not found.`)
  } catch (error) {
    next(error)
  }
})
export default productsRouter
