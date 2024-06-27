const express = require("express");
const http = require('http');
const bodyParser = require("body-parser");
const cors = require('cors');
const { initializeSocket } = require('./utilities/socket.setting');

const app = express();
const server = http.createServer(app);

const corsOpts = {
    origin: 'http://localhost:3000',
    methods: ['GET','POST',],
    allowedHeaders: ['Content-Type'],
    credentials: true
};
  
app.use(cors(corsOpts));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
initializeSocket(server);

const authRouter = require("./routes/auth.router");
app.use("/api", authRouter);

server.listen(10000);