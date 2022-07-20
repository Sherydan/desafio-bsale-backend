import express from "express";
// import morgan from "morgan";
const cors = require('cors');
const path = require('path');

const app = express();

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Desafio BSALE Api',
            version: '1.0.0',
            description: 'Desafio BSALE Api la cual permite realizar la gestión de una tienda online',
        },
        servers: [
            {
                url: 'https://desafio-bsale-backend.herokuapp.com/',
                description: 'Production'
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
};


// import http from "http" so i can keep alive the connection
 const http = require("http");

 // ping api endpont every second
setInterval(() => {
    http.get("http://desafio-bsale-backend.herokuapp.com/api/products");
}
, 3000);


// Importing the routes
import productsRoutes from "./routes/products.routes";


// settings
app.set("port", process.env.PORT || 4000);


// middlewares

// we can use morgan to see the requests in the console
// app.use(morgan("dev"));
// we can use cors to allow the requests from other domains
app.use(cors());

// routes
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)));
app.use("/api/products", productsRoutes);
app.use("/api/products/offers", productsRoutes);
app.use("/api/products/category/:category", productsRoutes);
app.use("/api/products/search/:name", productsRoutes);


// export default app so i can use it from my index file
export default app;