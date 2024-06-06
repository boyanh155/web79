import mongoose from "mongoose"

export const connectDB = () =>
    mongoose.connect(process.env.DB_CONNECTION_STRING)