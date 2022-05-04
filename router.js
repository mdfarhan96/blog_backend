const express=require("express");
const CategoryController=require("./controller")

CategoryRouter=express.Router();

CategoryRouter.route("/blog").get(CategoryController.categoryGet);
CategoryRouter.route("/blog/:category").get(CategoryController.categoryGet)

module.exports=CategoryRouter;