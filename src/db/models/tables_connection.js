import Category from "./Category.js"
import Product from "./Product.js"
import Review from "./Review.js"
import Cart from "./Cart.js"
import User from "./User.js"

//parentTable.belongsTo(childTable)
//{onDelete: "cascade"} = will allow the changes made on parentTable affect the childTable
//foreignKey is the id that the parentTable gives to the childTable,
//foreignKey: {allowNull: false}, will force the childTable to always have the foreignKey
Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
})

Category.hasMany(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
})

//when doing multiple relationships, Cart would end up having more than one foreignKey/primaryKey
//to force Cart have only the foreignKey whe use through: { unique: false }, so it preventes to form primaryKey
Product.belongsToMany(User, { through: { model: Cart, unique: false } })

User.belongsToMany(Product, { through: { model: Cart, unique: false } })




export default { Cart, Category, Product, Review, User }
