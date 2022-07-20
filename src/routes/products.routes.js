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
  *      Category:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: category unique id
 *              name:
 *                  type: string
 *                  description: category name
 */


// get all products
/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: return all products
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: get all products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Products'
 *          
 * 
 */
router.get("/", productsController.getProducts);

// get all products in offer
/**
 * @swagger
 * /api/products/offers:
 *  get:
 *      summary: return all products in offer
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: get all products in offer
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Products'
 *          
 * 
 */
router.get("/offers", productsController.getOffers);

// return products by category id
/**
 * @swagger
 * /api/products/category/{id}:
 *  get:
 *      summary: get all products by the given category id
 *      tags: [Products]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: category id
 *      responses:
 *          200:
 *              description: get all products by the given category id
 *              content:
 *                  application/json
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/Products'
 *              
 *          
 * 
 */
router.get("/category/:category", productsController.getProductsByCategory);
router.get("/search/:name", productsController.getProductsByName);

export default router;