import express from "express"

import "dotenv/config"
import { connectDB } from "./configs/connectDb.js"

import route from "./routes/index.route.js"
import cors from "cors"

const app = express()


app.use(express.json())
app.use(cors())

// MVC
// V - View
// Models
// Controllers

connectDB().then((_) => {
    console.log("Database connected")
        // app.use('/', (req, res) => {
        //     res.send("Hello world")
        // })

    const PORT = process.env.PORT

    route(app)


    app.listen(PORT, (err) => {
        if (err) throw new Error("Error:" + JSON.stringify(err))

        console.log("App is running on PORT " + PORT)
    })
})