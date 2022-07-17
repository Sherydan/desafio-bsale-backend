import express from "express";
import morgan from "morgan";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
// we can use morgan to see the requests in the console
app.use(morgan("dev"));

// export default app so i can use it from my index file
export default app;