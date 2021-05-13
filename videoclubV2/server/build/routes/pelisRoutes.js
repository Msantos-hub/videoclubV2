"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pelisController_1 = __importDefault(require("../controllers/pelisController"));
class PelisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pelisController_1.default.list);
        this.router.get('/', pelisController_1.default.getOne);
        this.router.post('/', pelisController_1.default.create);
        this.router.delete('/:id', pelisController_1.default.delete);
        this.router.put('/:id', pelisController_1.default.update);
    }
}
const pelisRoutes = new PelisRoutes();
exports.default = pelisRoutes.router;
