"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _env = _interopRequireDefault(require("./config/env"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
var app = (0, _express["default"])(),
    port = _env["default"].PORT; //Middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public"))); //Routes
//app.use("/", indexRouter);
//app.use("/users", usersRouter);

app.listen(port, function () {
  console.log("Express listening on port:", port);
});
var _default = app;
exports["default"] = _default;