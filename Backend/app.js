var express = require('express')
var mongoose = require('mongoose');
var dotenv = require('dotenv')

// middleware
var bodyParser = require( 'body-parser')
var cookieParser = require( 'cookie-parser')
var cors = require('cors')

// My Routes
var authRoutes = require('./routes/authentication')
var userRoutes = require('./routes/user')

// configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

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

// middleware configurations
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/v1",authRoutes)
app.use("/api/v1",userRoutes)

app.get("/",(req,res) => {
    return res.send('hello')
})

app.listen(PORT,() => {
    console.log(`App started at port ${PORT}`)
})