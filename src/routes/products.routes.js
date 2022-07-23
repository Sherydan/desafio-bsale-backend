const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

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
router.get("/", productsController.getAllProducts);

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
router.get("/offers", productsController.getAllOffers);

// // get products by category id
// /**
//  * @swagger
//  * /api/products/category/{id}:
//  *   get:
//  *     summary: get products by given category id
//  *     tags: [Products]
//  *     parameters:
//  *       - in : path
//  *         name: id
//  *         description: id of category
//  *         schema:
//  *           type: integer
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: products by category id
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Products'
//  *       400:
//  *         description: no products found
//  */
router.get("/category/:category", productsController.getProductsByCategory);

// // get products by name
// /**
//  * @swagger
//  * /api/products/search/{name}:
//  *   get:
//  *     summary: get products by given category id
//  *     tags: [Products]
//  *     parameters:
//  *       - in : path
//  *         name: name
//  *         description: name of product
//  *         schema:
//  *           type: string
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: products by name
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Products'
//  *       400:
//  *         description: no products found
//  */
router.get("/search/:name", productsController.getProductsByName);

module.exports = router;
