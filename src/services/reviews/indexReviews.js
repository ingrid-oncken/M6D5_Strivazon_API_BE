import db from "../../db/models/tables_connection.js"
import express from "express"

const reviewsRouter = express.Router()
const { Review } = db

reviewsRouter 
.route("/")
.get(async(res, req))