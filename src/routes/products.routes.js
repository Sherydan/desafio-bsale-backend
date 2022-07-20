import { Router } from "express";
import { methods as productsController } from "./../controllers/products.controller";

const router = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *    type: object
 *   properties:
 *   id:
 *   type: integer
 *  name:
 *  type: string
 * url_image:
 * type: string
 * price:
 * type: number
 * discount:
 * type: number
 * category:
 * type: integer
 * example:
 * id: 1
 * name: "Vino Tinto"
 * url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon409062.jpg"
 * price: 1000
 * discount: 10
 * category: 1
 * 
 * 
 * 
 */


router.get("/", productsController.getProducts);
router.get("/offers", productsController.getOffers);
router.get("/category/:category", productsController.getProductsByCategory);
router.get("/search/:name", productsController.getProductsByName);

export default router;