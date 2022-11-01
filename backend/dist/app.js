"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const recipes_routes_1 = __importDefault(require("./routes/recipes.routes"));
// initializations
const app = (0, express_1.default)();
// settings
app.set("port", process.env.PORT || 4000);
// middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// routes
app.get("/", (req, res) => {
    res.json({ msg: `The api is http://localhost:${app.get("port")}` });
});
app.use(auth_routes_1.default);
app.use(recipes_routes_1.default);
exports.default = app;
