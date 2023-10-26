import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error('Failed to connect', err);
    });

const app = express();

app.use(express.json());

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log(`Server is Running ${Port}!`)
})

//Routes Defines

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: 0,
        statusCode,
        message
    })
})