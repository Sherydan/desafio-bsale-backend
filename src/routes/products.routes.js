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


/**
 * @swagger
 * /api/products:
 * get:
 *  summary: return all products
 *  tags: [Products]
 *  responses:
 *      200:
 *          description: return all products
 *          content: application/json
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Products'
 */
router.get("/", productsController.getProducts);


/**
 * @swagger
 * /api/products/offers:
 * get:
 *  summary: return products offers
 *  tags: [Products]
 *  responses:
 *      200:
 *          description: return products offers
 *          content: application/json
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Products'
 */
router.get("/offers", productsController.getOffers);


/**
 * @swagger
 * /api/products/category/{id}:
 * get:
 *  summary: return products by given id
 *  tags: [Products]
 *  parameters:
 *      -   in: path
 *          name: id
 *          schema:
 *              type: integer
 *          required: true
 *          description: category id
 *  responses:
 *      200:
 *          description: return products by given id
 *          content: application/json
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Products'
 *      404:
 *          description: no products found for the given category id
 */
router.get("/category/:category", productsController.getProductsByCategory);


/**
 * @swagger
 * /api/products/search/{name}:
 * get:
 *  summary: return products by the given name
 *  tags: [Products]
 *  parameters:
 *      -   in: path
 *          name: name
 *          schema:
 *              type: string
 *          required: true
 *          description: product name
 *  responses:
 *      200:
 *          description: return products by the given name
 *          content: application/json
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Products'
 *      404:
 *          description: no products found for the given name
 */
router.get("/search/:name", productsController.getProductsByName);

export default router;