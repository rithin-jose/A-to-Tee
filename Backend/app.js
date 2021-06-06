import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 8000;

app.get("/",(req,res) => {
    return res.send('hello')
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
    console.log(uuidv4());
})