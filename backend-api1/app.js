const e = require("express")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3001

const data = [
    'API1',
    'API1',
    'API1'
]

app.get("/api1", (req, res) => {
    res.json({api: 1, data})
})

app.listen(PORT, () => {
    console.log("API 1 :" + PORT)
})