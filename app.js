import express from "express";
import morgan from "morgan";
const cors = require('cors');

const app = express();

// import http from "http" so i can keep alive the connection
 const http = require("http");

 // ping api endpont every second
setInterval(() => {
    http.get("https://api-desafio-bsale.herokuapp.com:4000/api/products");
}
, 3000);


// Importing the routes
import productsRoutes from "./src/routes/products.routes";


// settings
app.set("port", process.env.PORT || 4000);


// middlewares
// we can use morgan to see the requests in the console
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/products", productsRoutes);
app.use("/api/products/offers", productsRoutes);
app.use("/api/products/category/:category", productsRoutes);
app.use("/api/products/search/:name", productsRoutes);


// export default app so i can use it from my index file
export default app;