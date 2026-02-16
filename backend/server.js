import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("API is Running Successfully!")
});
connectDB();

app.listen(5001, () => {
    console.log("Server is running on port 5001");
})