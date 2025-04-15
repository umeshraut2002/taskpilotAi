import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db/index.jf";

// dotenv path load from here 
dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port : ${PORT}`);
        })
    })
    .catch(err) => {
        console.error("Database connection failed", err);
        process.exit(1);
    }