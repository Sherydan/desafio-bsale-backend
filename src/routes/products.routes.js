import { Router } from "express";
import { methods as productsController } from "./../controllers/products.controller";

const router = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *      Products:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: product unique id
 *              name:
 *                  type: string
 *                  description: product name
 *              url_image:
 *                  type: string
 *                  description: product image
 *              price:
 *                  type: number
 *                  description: product price
 *              discount:
 *                  type: number
 *                  description: product discount
 *              category:
 *                  type: integer
 *                  description: categorym id
 *  
 * 
 * 
 * 
 */


router.get("/", productsController.getProducts);
router.get("/offers", productsController.getOffers);
router.get("/category/:category", productsController.getProductsByCategory);
router.get("/search/:name", productsController.getProductsByName);

export default router;