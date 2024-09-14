import mongoose from "mongoose";

export class Config {
    private DB_URL: string
    private DB_NAME: string
    constructor() { 
        this.DB_URL = process.env.DB_URL!
        this.DB_NAME = process.env.DB_NAME!
    }

    async connectMongoDB() {
        try {
            const connectionInstance = await mongoose.connect(`${this.DB_URL}/${this.DB_NAME}`)
            console.log(`MongoDB connected !! DB HOST  ${connectionInstance.connection.host}:`);
        } catch (error: any) {
            console.log(`MONGODB CONNECTION FAILED: ${error}`);
            process.exit(1);
        }
    }
}