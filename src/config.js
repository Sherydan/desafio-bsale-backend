import {config} from "dotenv"

config();

// get environment variables from .env file
export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",

};