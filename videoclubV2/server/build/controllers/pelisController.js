"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PelisController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pelis = yield database_1.default.query('SELECT * FROM peliculas');
            res.json(pelis);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pelis = yield database_1.default.query('SELECT * FROM peliculas WHERE codPelicula = ?', [id]);
            console.log(pelis.length);
            if (pelis.length > 0) {
                return res.json(pelis[0]);
            }
            res.status(404).json({ text: 'Pelicula no encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO peliculas set ?', [req.body]);
            res.json({ message: 'pelicula guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM peliculas WHERE codPelicula = ?', [id]);
            res.json({ message: 'pelicula eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldPeli = req.body;
            yield database_1.default.query('UPDATE peliculas set ? WHERE id= ?', [req.body, id]);
            res.json({ message: 'La pelicula fue actualizada' });
        });
    }
}
const pelisController = new PelisController();
exports.default = pelisController;
