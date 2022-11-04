import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { readFileSync } from 'fs'
import { getWords } from "../model/test_model";

const app = express();

app.use(cors({
    origin: 'http//localhost:3000'
}))
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));



// app.use('/',dataPage)

app.get('/', (req, res) => {
    res.json(getWords())
})


app.listen(8000, () => {
    console.log("server is running on port: 8000")
})