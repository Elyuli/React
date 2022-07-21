"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var env = {
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || "3000",
  DATABASE: process.env.DATABASE || "alkemy",
  USERNAME: process.env.USERNAME || "mysql",
  PASSWORD: process.env.PASSWORD || "mysql",
  DIALECT: process.env.DIALECT || "mysql"
};
var _default = env;
exports["default"] = _default;