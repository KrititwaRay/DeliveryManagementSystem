import express, { Application } from 'express';
import dotenv from 'dotenv';

const app: Application = express();
dotenv.config();


app.use(express.json({ limit: '150mb' }));

import { Config } from './config/config'; 
const config = new Config();
config.connectMongoDB()

import { app_router } from './app_routing';
app.use('/v1', app_router)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})
