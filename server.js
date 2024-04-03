const express = require('express')
const routes = require("./routes/api/index")

const app = express()
const port = process.env.PORT || 3001

//MIDDLEWARES
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

//ROUTES

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})