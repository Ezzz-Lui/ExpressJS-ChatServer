const express = require('express');
const path = require('path')
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/models/home.html')
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log("**********************************");
  console.log("*         Server Live Chat       *")
  console.log("**********************************\n");
  console.log(`Listening on http://localhost:${port}`);
})