import express from 'express';
import expressWs from "express-ws"
import { Application } from 'express';

const { app } = expressWs(express() as Application);
const PORT = process.env.PORT || 5000

expressWs(app)

app.listen(PORT, ()=> console.log(`Starting on port ${PORT}`))

app.ws('/', (ws, req) => {
    console.log('Client connected');

});