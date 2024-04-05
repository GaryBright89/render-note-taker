const router = require("express").Router();

//HTML ROUTES
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//notes page
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );



module.exports = router