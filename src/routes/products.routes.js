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
 *      id:
 *      type: integer
 *      name:
 *          type: string
 *      url_image:
 *          type: string
 *      price:
 *          type: number
 *      discount:
 *          type: number
 *  category:
 *      type: integer
 * 
 * 
 * 
 */


router.get("/", productsController.getProducts);
router.get("/offers", productsController.getOffers);
router.get("/category/:category", productsController.getProductsByCategory);
router.get("/search/:name", productsController.getProductsByName);

export default router;