import express from "express"
import db from "../../db/models/tables_connection.js"

const cartRouter = express.Router()

const { Cart } = db

cartRouter.route("/:id").put(async (req, res, next) => {
  try {
    const updateCart = await Cart.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    res.send(updateCart)
  } catch (error) {
    next(error)
  }
})
export default cartRouter