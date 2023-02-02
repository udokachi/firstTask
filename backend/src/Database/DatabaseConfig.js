const DB = process.env.DATABASE_URL

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('Database successfully connected')
  })
  .catch(err => {
    console.error(err)
})
