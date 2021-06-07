import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// middleware
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'


// configurations
dotenv.config();
const app = express();
const PORT = 8000;

// middleware configurations
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})
.then(() => {
    console.log('DB Connected');
})
.catch((error) => {
    console.log(error);
})

// 


app.get("/",(req,res) => {
    return res.send('hello')
})

app.listen(PORT,() => {
    console.log(`App started at port ${PORT}`)
})