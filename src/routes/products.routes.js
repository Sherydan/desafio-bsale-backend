import { Router } from "express";
import { methods as productsController } from "./../controllers/products.controller";

const router = Router();

router.get("/", productsController.getProducts);
router.get("/offers", productsController.getOffers);
router.get("/category/:category/order/:order", productsController.getProductsByCategory);
router.get("/search/:name", productsController.getProductsByName);

export default router;