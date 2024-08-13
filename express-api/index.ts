import express from  'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "ok": true,
    "menssage": "success",
    "data": {
        "id": 1
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})