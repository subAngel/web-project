import express, { urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import recipesRoutes from "./routes/recipes.routes";

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.get("/", (req, res) => {
	res.json({ msg: `The api is http://localhost:${app.get("port")}` });
});
app.use(authRoutes);
app.use(recipesRoutes);
export default app;
