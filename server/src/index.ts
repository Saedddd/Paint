import express from 'express';
import WSServer from "express-ws"

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Starting on port ${PORT}`))
