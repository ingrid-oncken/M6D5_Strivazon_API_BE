import express from "express"
import db from "../../db/models/tables_connection.js"

const userRouter = express.Router()

const { User } = db

userRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const getAllUsers = await User.findAll()
      
      getAllUsers.length > 0
        ? res.send(getAllUsers)
        : res.send(`The user list is empty.`)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const createOneUser = await User.create(req.body)

      res.send(createOneUser)
    } catch (error) {
      next(error)
    }
  })
export default userRouter
