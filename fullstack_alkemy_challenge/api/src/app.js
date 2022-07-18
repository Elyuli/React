import express from "express";
import path from "path";
import env from "./config/env";
import cookieParser from "cookie-parser";
import logger from "morgan";

//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");

const app = express(),
	port = env.PORT;

//Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Routes
//app.use("/", indexRouter);
//app.use("/users", usersRouter);

app.listen(port, () => {
	console.log("Express listening on port:", port);
});

export default app;
