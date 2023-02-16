const express = require("express")
const app = express();
const port = 3000
const authRouter = require("./routes/auth")
const {sequelize} = require("./models");

app.use(express.json())
app.use(authRouter)

app.listen(port, async ()=> {
  console.log("서버 열림");
  await sequelize.authenticate()
  console.log('디비 연결됐다.')
})

