import express from "express";
import cors from "cors";
import { readFileSync } from 'fs'
import { getWords } from "../model/test_model";
const app = express();

app.use(cors({
    origin: 'http//localhost:3000'
}))

// app.use('/',dataPage)

app.get('/', (req, res) => {
    res.json(getWords())
})


app.use(express.json());
app.listen(8000, () => {
    console.log("server is running on port: 8000")
})