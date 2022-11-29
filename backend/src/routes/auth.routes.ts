import { Router } from "express";
import * as authCtrl from "../controllers/user.controller";

const router = Router();

router.post("/signup", authCtrl.signUp);
router.post("/create-user/:full_name/:username/:email/:password", authCtrl.createUser);
router.post("/login", authCtrl.logIn);
router.get("/users", authCtrl.getUsuarios);
router.get("/user/:username", authCtrl.getUsuario);

export default router;
