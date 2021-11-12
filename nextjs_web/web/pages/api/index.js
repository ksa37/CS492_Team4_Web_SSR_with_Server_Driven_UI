import axios from "axios";

export default function handler(req, res) {
  if (req.method === 'GET')
  {
    axios.post('http://localhost:4000/wikis')
      .then((response) => {
        const new_res = response.data
        console.log(response.data)
        res.status(200).send(new_res)
      })
      .catch((error)=> {
        console.log(error)
        res.status(404).send({ error: 'Not Found' })
      })
  }
  else
  {
    res.status(403).send({ error: 'Forbidden' })
  }
}
