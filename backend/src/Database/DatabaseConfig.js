const mongoose = require ( "mongoose")

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`connected to ${connect.connection.host}`)

  } catch (error) {
    console.error(`error connecting to db ${error}`)

  }
}
module.exports = connectDB