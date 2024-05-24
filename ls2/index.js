const { default: axios } = require("axios")
const express = require("express")

const app = express()

app.use(express.json())

// app.get()

// route 
// /posts
// API

// SSR vs CSR
// Server Side Rendering NextJs 
// Client Side Rendering ReactJS

// REACT
// react router

// http:localhost:3000
// Request: [GET] / 
// Response <Post/>
// <Post/>
// <Route path="/" method="GET" component=<Post/>/>

// URL: http:localhost:3000/:endpoint (required)
// METHOD: GET (required)
// BODY, HEADER
// REQUEST 
// RESPONSE

// DATABASE
//

// backend : API application
// frontend: Web application

// applications 

// frontend: register


// server ->  deploy 

// user interact app  -> UI  

// app interact app -> API 

// guest -> [GET] http://localhost:3000/register <Register/> -> user input -> valid user input -> filter  -> [GET] /register http://localhost:3001/register  -> database

// ma hoa du lieu

// user: user1
// password:  123456 -> hash

// 123456

// Mock database


//database
//  reactJS 
// <Todos/>
// todos.filter



app.get('/', async(request, response) => {
    const _res = await axios.get('https://664de79aede9a2b5565566df.mockapi.io/todo')
    const todos = _res.data

    //
    return response.send(todos)
})


app.post('/', async(request, response) => {

    // 
    let _res = "hello"
    _res = (await axios.post('https://664de79aede9a2b5565566df.mockapi.io/todo', request.body)).data
        //

    // todos.push(_res)

    return response.json(_res)

})


app.listen(3000, () => {
    console.log("App is listening on 3000")
})