const connectDB = require ("./src/Database/DatabaseConfig")
const createServer = require ("./app")
const dotenv = require ( 'dotenv')
dotenv.config()

const Port = process.env.PORT || 4000
connectDB()

const app = createServer()

app.listen(Port,()=>{
    console.log(`Server running at http://localhost:${Port}`)
})