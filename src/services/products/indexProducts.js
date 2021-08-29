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

productsRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const getOneProduct = await Product.findByPk(req.params.id)

      getOneProduct
        ? res.send(getOneProduct)
        : res.send(`The product with id ${req.params.id} was not found.`)
    } catch (error) {
      next(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const updateOneProduct = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      })
      
      updateOneProduct[1][0]
        ? res.send(updateOneProduct[1][0])
        : res.send(`The product with id ${req.params.id} was not found.`)
    } catch (error) {
      next(error)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deleteOne = await Product.destroy({
        where: {
          id: req.params.id,
        },
      })
      deleteOne > 0
        ? res.send(
            `The product with the id ${req.params.id} was successfully deleted.`
          )
        : res
            .status(404)
            .send(`The product with id ${req.params.id} wasn't found`)
    } catch (error) {
      next(error)
    }
  })
export default productsRouter
