const express = require ("express")
const morgan = require ("morgan")
const cors = require ("cors")
const helmet = require ("helmet")
const v1 = require("./v1/v1")

const createServer = () =>{
    const app = express() 

    app.use (express.json()) 
    .use(cors())
    .use(morgan('tiny'))
    .use (helmet())
    .use ("/api/v1",v1); 


    return app
}

module.exports = createServer
