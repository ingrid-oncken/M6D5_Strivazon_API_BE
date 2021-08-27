import express from "express"
import cors from "cors"
import { syncSequelize } from "./db/db_connection.js"
import categoriesRouter from "./services/category/indexCategory.js"

const server = express()

const port = process.env.PORT || 5001

server.use(cors())
server.use(express.json())

server.use("/categories", categoriesRouter)
// server.use("/products", productsRouter)
// server.use("/reviews", reviewsRouter)
// server.use("/cart", cartRouter)

server.listen(port, async () => {
  console.log("🚀 Server is running on port ", port)
  await syncSequelize()
})

server.on("error", (error) =>
  console.log("❌ Server is crashed due to ", error)
)
