"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const port = 3000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware: check request before response
// 1. create logger , 2. User Logger , 3. call next()- untill call it, server will not get any rseponse cz req is processing in logger
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// Router
const userRoute = express_1.default.Router(); //work as a Middleware that's why we need to use it
const CourseRoute = express_1.default.Router();
app.use("/api/v1/users", userRoute);
app.use("/api/v1/Courses", CourseRoute);
userRoute.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created Successfully",
        user: user
    });
});
CourseRoute.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created Successfully",
        user: course
    });
});
//dynamic route | http://localhost:5000/50/23
app.get('/:userID/:subID', logger, (req, res) => {
    console.log(req.params);
    res.send('Hello Form Server!!!');
});
//query params | http://localhost:5000?email=thamidtuhin74@gmail.com&name=Tahmid Tuhin
app.get('/', logger, (req, res) => {
    console.log(req.query);
    res.send('Hello Form Server!!!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send("got data");
    res.json({
        message: "Successfully Recived Data"
    });
});
//Error handeling | By default handler get a HTML error
app.get('/error-handeling', logger, (req, res, next) => {
    try {
        res.send(something);
    }
    catch (error) {
        //console.log(error)
        next(error);
    }
});
// global Route Error Handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});
// global Error Handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(404).json({
            success: false,
            message: "Faild to load Data ----"
        });
    }
});
exports.default = app;
