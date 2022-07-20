"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("./routes/users"));

var _operations = _interopRequireDefault(require("./routes/operations"));

var _categories = _interopRequireDefault(require("./routes/categories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [_users["default"], _operations["default"], _categories["default"]];
/* Routes*/

var router = function router(app, db) {
  routes.forEach(function (route) {
    return route(app, db);
  });
};

var _default = router;
exports["default"] = _default;