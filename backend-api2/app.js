const e = require("express")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3002

const data = [
    'API2',
    'API2',
    'API2'
]

app.get("/api2", (req, res) => {
    res.json({api: 2, data})
})

app.listen(PORT, () => {
    console.log("API 2 :" + PORT)
})