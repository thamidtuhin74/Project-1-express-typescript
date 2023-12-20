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
exports.default = app;
