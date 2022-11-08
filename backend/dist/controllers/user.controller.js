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
exports.getUsuario = exports.getUsuarios = exports.logIn = exports.createUser = exports.signUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, usename: user.username }, config_1.default.jwtSecret);
}
// * Registrarse
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    if (!req.body.username || !req.body.password || !req.body.full_name) {
        return res
            .status(400)
            .json({ msg: "Please, send your username and password" });
    }
    const user = yield user_1.default.findOne({ username: req.body.username });
    if (user) {
        return res.status(400).json({ msg: "The user already exists" });
    }
    const newUser = new user_1.default(req.body);
    yield newUser.save();
    return res.status(201).json(newUser);
});
exports.signUp = signUp;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, full_name, email } = req.params;
    if (!username || !password || !full_name || !email) {
        return res.status(400).json({ msg: "Por favor rellene todos los campos" });
    }
    const user = yield user_1.default.findOne({ username });
    if (user) {
        return res.status(400).json({ msg: "El usuario ya existe" });
    }
    const newUser = new user_1.default(req.params);
    yield newUser.save();
    return res.status(201).json({ msg: "Usuario creado correctamente" });
});
exports.createUser = createUser;
// * entrar
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.username || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please, send your username and password" });
    }
    const user = yield user_1.default.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).json({ msg: "This user doesn't exists" });
    }
    const isMatch = yield user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({ token: createToken(user) });
    }
    return res.status(400).json({ msg: "The username or password are incorrect" });
});
exports.logIn = logIn;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield user_1.default.find();
    const object = Object.assign({}, usuarios);
    console.log(usuarios);
    return res.status(200).json(usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const user_name = req.params.username
    const usuario = yield user_1.default.findOne({ username: req.params.username });
    console.log(usuario);
    return res.status(200).json(usuario);
});
exports.getUsuario = getUsuario;
