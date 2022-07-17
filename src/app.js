import express from "express";
import morgan from "morgan";

// Importing the routes
import productsRoutes from "./routes/products.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
// we can use morgan to see the requests in the console
app.use(morgan("dev"));

// routes
app.use("/api/products", productsRoutes);


// export default app so i can use it from my index file
export default app;