import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import conn from './database.js'
import singupRoute from './routes/signup.route.js'
import bodyParser from 'body-parser';
import addTaskRoute from './routes/taskpost.route.js'
import loginRoute from './routes/login.route.js'
import getAllRoute from './routes/getAllTodo.route.js'
import getById from './routes/getById.route.js'
import updateByIdRoute from './routes/updateById.route.js';
import deleteByIdRoute from './routes/deleteById.route.js';
import cookieParser from 'cookie-parser'
import logoutRouter from './routes/logout.router.js'; 
import homepageRouter from './routes/homepage.route.js'

// application 
const app = express()
// middlewares
app.use(express.json())
app.use(morgan('dev'))
dotenv.config()
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
//connected database 
conn();
//port to host incoming traffic
const PORT = process.env.PORT; 
// api end points
// signup route 
app.use('/api/v1',homepageRouter);
app.use('/api/v1/signup',singupRoute);
app.use('/api/v1/addTask',addTaskRoute);
app.use('/api/v1/login',loginRoute);
app.use('/api/v1/getAllTodo',getAllRoute);
app.use('/api/v1/getById',getById); 
app.use('/api/v1/updateById',updateByIdRoute); 
app.use('/api/v1/deleteById',deleteByIdRoute); 
app.use('/api/v1/logout',logoutRouter);

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server running at http://localhost:8000/api/v1`)
})