import { Router } from "express";
import {
	logIn,
	signUp,
	getUsuarios,
	getUsuario,
} from "../controllers/user.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/users", getUsuarios);
router.get("/user/:username", getUsuario);

export default router;
