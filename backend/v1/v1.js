const { Router } = require("express");
const userRoutes = require("../src/routes/userRoutes");

const v1 = Router()


v1.use("/user", userRoutes )

module.exports = v1