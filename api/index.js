import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error('Failed to connect', err);
    });

const app = express();

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log(`Server is Running ${Port}!`)
})