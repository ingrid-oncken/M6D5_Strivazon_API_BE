import express from "express"
import cors from "cors"
import { syncSequelize } from "./db/db_connection.js"
import categoriesRouter from "./services/category/indexCategory.js"
import productsRouter from "./services/products/indexProducts.js"
import reviewsRouter from "./services/reviews/indexReviews.js"
import cartRouter from "./services/cart/indexCart.js"
import userRouter from "./services/user/indexUser.js"

const server = express()

const port = process.env.PORT || 5001

server.use(cors())
server.use(express.json())

server.use("/categories", categoriesRouter)
server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
server.use("/cart", cartRouter)
server.use("/user", userRouter)

server.listen(port, async () => {
  console.log("🚀 Server is running on port ", port)
  await syncSequelize()
})

server.on("error", (error) =>
  console.log("❌ Server is crashed due to ", error)
)
