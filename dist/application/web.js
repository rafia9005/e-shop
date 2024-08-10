"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("../route/router");
const error_middleware_1 = require("../middleware/error-middleware");
exports.web = (0, express_1.default)();
exports.web.use(express_1.default.json());
exports.web.use(router_1.router);
exports.web.use(error_middleware_1.errorMiddleware);
exports.web.listen(3000, () => {
    console.log("running");
});
