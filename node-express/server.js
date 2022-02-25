const express = require("express")
const app = express();
const PORT = process.env.PORT || 8001;

app.get('/', (req, res) => res.send('<h2>Hello There , I am nodemon</h2>'))

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));