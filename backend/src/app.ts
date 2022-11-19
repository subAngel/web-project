import express, { Request, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import recipesRoutes from "./routes/recipes.routes";
import { format } from "timeago.js";
import multer, { FileFilterCallback } from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import * as path from "path";

// * types
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
const storage = multer.diskStorage({
	destination: path.join(__dirname, "public/img/uploads"),
	filename: (req, file, cb) => {
		cb(null, uuidv4() + path.extname(file.originalname));
	},
});
app.use(multer({ storage }).single("image"));
// * static files
app.use("/", express.static(path.resolve(__dirname, "public")));

// routes

app.get("/", (req, res) => {
	res.json({ msg: `The api is http://localhost:${app.get("port")}` });
});
app.use(authRoutes);
app.use(recipesRoutes);

export default app;
