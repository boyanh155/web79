// ES5 type = 'commonjs'
// const http = require('http')

// ES6+ type = 'module'
// import http from "http"

// http, restful API 
const http = require('http')
    // expressJS 

// http, restful API
// Method GET
// URL localhost:3001/
// status 200
// response: "Hello world" 
const server = http.createServer((request, response) => {
    // 1 req, 1 res
    // TASK: 
    // URL: localhost:3001/user
    // RESPONSE: users
    // request
    if (request.url === '/users') {
        // array, object => object
        response.statusCode = 200
        return response.end(JSON.stringify(users))
    }

    // /booking

    return response.end('Hello world')
})

// client -> server
// port 

server.listen(3001, () => {
    console.log('App is running on port 3001')
})

var users = [{
        "name": "A",
    },
    {
        "name": "B",
    },
    {
        "name": "C",
    },
    {
        "name": "D",
    },
]