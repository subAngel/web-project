import { Router } from "express";
import {
	logIn,
	signUp,
	getUsuarios,
	getUsuario,
	createUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/create-user/:full_name/:username/:email/:password", createUser);
router.post("/login", logIn);
router.get("/users", getUsuarios);
router.get("/user/:username", getUsuario);

export default router;
