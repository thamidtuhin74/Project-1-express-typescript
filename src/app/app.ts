// const express = require('express')
import express, { NextFunction, Request, Response } from 'express'
import { json } from 'stream/consumers'
const app = express()
// const port = 3000;


//parsers
app.use(express.json());
app.use(express.text());


//middleware: check request before response
// 1. create logger , 2. User Logger , 3. call next()- untill call it, server will not get any rseponse cz req is processing in logger
const logger = (req: Request,res: Response, next: NextFunction)=>{
    console.log(req.url,req.method,req.hostname);
    next();
}

// Router
const userRoute =  express.Router();//work as a Middleware that's why we need to use it
const CourseRoute =  express.Router();

app.use("/api/v1/users",userRoute);
app.use("/api/v1/Courses",CourseRoute);

userRoute.get("/create-user",(req: Request,res: Response)=>{
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: "User is created Successfully",
        user: user
    })
})

CourseRoute.post("/create-course",(req: Request,res: Response)=>{
    const course = req.body;
    console.log(course);

    res.json({
        success: true,
        message: "course is created Successfully",
        user: course
    })
})

//dynamic route | http://localhost:5000/50/23
app.get('/:userID/:subID',logger, (req : Request, res: Response) => {
    console.log(req.params);

  res.send('Hello Form Server!!!')
})
//query params | http://localhost:5000?email=thamidtuhin74@gmail.com&name=Tahmid Tuhin
app.get('/',logger, (req : Request, res: Response) => {
    console.log(req.query);

  res.send('Hello Form Server!!!')
})


app.post('/',logger,(req : Request, res: Response)=>{
    console.log(req.body);
    // res.send("got data");
    res.json({
        message : "Successfully Recived Data"
    })

})



export default app;