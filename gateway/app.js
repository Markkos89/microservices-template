const fetch = require("node-fetch")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000
const SERVICE_API1_ENDPOINT = process.env.SERVICE_API1_ENDPOINT
const SERVICE_API2_ENDPOINT = process.env.SERVICE_API2_ENDPOINT

const gateway = {
    'api1': SERVICE_API1_ENDPOINT,
    'api2': SERVICE_API2_ENDPOINT
}

app.get("/api", async (req, res) => {
    const { api } = req.query
    const url = gateway[api]
    const data = await fetch(url)
    res.json({api, data})
})

app.listen(PORT, () => {
    console.log("GATEWAY :" + PORT)
})