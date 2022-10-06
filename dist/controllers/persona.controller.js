"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getPersonas = (req, res) => {
    connection_1.default.query('SELECT * FROM persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM persona WHERE id=?', id, (err) => {
        if (err) {
            throw err;
        }
        else if (id === null) {
            return (err);
        }
        else {
            res.json({
                msj: "Persona Eliminada",
                id: id
            });
        }
    });
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO persona set ?', [body], (err) => {
        if (err)
            throw err;
        res.json({
            msj: "Agregado con Exito",
            body: body,
        });
    });
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    console.log(req.body);
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query("UPDATE persona set ? WHERE id=?", [body, id], (err) => {
        if (err)
            throw err;
        res.json({
            msj: "Actualizado con Exito",
            body: body,
        });
    });
};
exports.putPersona = putPersona;
