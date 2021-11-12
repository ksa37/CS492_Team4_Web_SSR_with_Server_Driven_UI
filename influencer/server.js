const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getdata", (req, res) => {
  return res.send(html);
});

const html = `
<div> <h1> Hello worlds </h1></div>
`;

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(8000);


// const express = require('express');
// const app = express();
// const html = `
// <div> <h1> Hello worlds </h1></div>
// `;

// app.get('/', (req, res) => {
//   res.send(html);
// });

// app.get('/getdata', (req, res) => {
//   res.send(console.log('getdata'));
// });

// app.listen(8003, () => {
//   console.log('익스프레스로 서버 실행!');
// });