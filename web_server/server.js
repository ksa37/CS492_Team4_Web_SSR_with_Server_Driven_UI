const express = require('express')
const path = require("path");
const axios = require("axios").default
const app = express();

app.use('/_next', express.static(path.join(__dirname, '../render_server/.next')));
app.use(express.static(path.join(__dirname, '../render_server/public')));
app.use(handleRender);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const random_keywords = ['Bulguksa','Paris','WorkLaterDrinkNow'];

function handleRender(req, res) {
  const id = req.query.id ? req.query.id : random_keywords[getRandomIntInclusive(0,random_keywords.length-1)];
  if ((id === "Paris") || (id === "Bulguksa") || (id === "WorkLaterDrinkNow"))
  {
    const views_input = req.query.views ?  req.query.views : ["basic", "influencer", "review", "wiki", "photo", "news"];
    axios.get(`http://localhost:5000/${id}`)
      .then((response) => {
        const json = response.data
        let views = []
        views_input.forEach(element => {
          if (json.views.includes(element))
          {
            views.push(element)
          }
        });
        axios.post("http://localhost:3000/", {data: JSON.stringify(json), views: views})
          .then((response) => {
            const html = response.data
            res.send(html);
          })
          .catch((error) => console.log("error:", error));
      })
      .catch((error) => console.log("error:", error));
  }
  else
  {
    res.sendStatus(404)
  }
}

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});