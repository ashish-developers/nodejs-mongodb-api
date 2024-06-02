var express = require("express");
var bodyParser = require("body-parser");
var redis = require("redis");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var redisClient;

(async () => {
  redisClient = redis.createClient();
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
})();

var authRouter = require("./routes/auth.router")

app.use("/api", authRouter)

app.listen(10000)