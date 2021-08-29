import db from "../../db/models/tables_connection.js"
import express from "express"

const reviewsRouter = express.Router()
const { Review } = db

reviewsRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const getAll = await Review.findAll()

      //res.send(getAll)
      getAll.length > 0
        ? res.send(getAll)
        : res.send(`There is no reviews for this product.`)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const createOneReview = await Review.create(req.body)

      res.send(createOneReview)
    } catch (error) {
      next(error)
    }
  })

reviewsRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const getOneReview = await Review.findByPk(req.params.id)

      getOneReview
        ? res.send(getOneReview)
        : res.send(`The review with the id ${req.params.id} can not be found.`)
    } catch (error) {
      next(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const createOneReview = await Review.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      })

      createOneReview[1][0]
        ? res.send(createOneReview[1][0])
        : res.send(`The review with id ${req.params.id} was not found.`)
    } catch (error) {
      next(error)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deleteOneReview = await Review.destroy({
        where: {
          id: req.params.id,
        },
      })

      deleteOneReview > 0
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
export default reviewsRouter
