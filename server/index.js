const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Use MiddleWare
app.use(cors);
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listen on port ${port}`))