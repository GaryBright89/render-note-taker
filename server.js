const express = require('express')
const routes = require("./routes/api/index")

const app = express()
const port = process.env.PORT || 3001

//MIDDLEWARES
app.use(express.json())
app.use(routes);


//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})