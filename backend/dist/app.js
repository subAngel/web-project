"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const recipes_routes_1 = __importDefault(require("./routes/recipes.routes"));
const multer_1 = __importDefault(require("multer"));
const uuidv4_1 = require("uuidv4");
const path = __importStar(require("path"));
// initializations
const app = (0, express_1.default)();
// settings
app.set("port", process.env.PORT || 4000);
// middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
const storage = multer_1.default.diskStorage({
    destination: path.join(__dirname, "public/img/uploads"),
    filename: (req, file, callback) => {
        callback(null, (0, uuidv4_1.uuid)() + path.extname(file.originalname));
    },
});
app.use((0, multer_1.default)({ storage: storage }).single("image"));
// routes
app.get("/", (req, res) => {
    res.json({ msg: `The api is http://localhost:${app.get("port")}` });
});
// * static files
app.use(express_1.default.static(path.join(__dirname, "public")));
app.use(auth_routes_1.default);
app.use(recipes_routes_1.default);
exports.default = app;
