const express = require('express')
const path = require("path");
const axios = require("axios").default
const app = express();

app.use('/_next', express.static(path.join(__dirname, '../render_server/.next')));
app.use(express.static(path.join(__dirname, '../render_server/public')));
app.use(handleRender);
function handleRender(req, res) {
  const id = req.query.id ? req.query.id : 'Paris';
  axios.get(`http://localhost:5000/${id}`)
    .then((response) => {
      const json = response.data
      axios.post("http://localhost:3000/", {data: JSON.stringify(json)})
        .then((response) => {
          const html = response.data
          res.send(html);
        })
        .catch((error) => console.log("error:", error));
    })
    .catch((error) => console.log("error:", error));
}

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});