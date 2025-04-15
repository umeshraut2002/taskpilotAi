import app from "./app";
import dotenv from "dotenv";

// dotenv path load from here 
dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8000;

