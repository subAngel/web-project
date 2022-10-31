import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
	return jwt.sign({ id: user.id, usename: user.username }, config.jwtSecret);
}

// * Registrarse
export const signUp = async (req: Request, res: Response): Promise<Response> => {
	console.log(req.body);
	if (!req.body.username || !req.body.password || !req.body.full_name) {
		return res
			.status(400)
			.json({ msg: "Please, send your username and password" });
	}
	const user = await User.findOne({ username: req.body.username });
	if (user) {
		return res.status(400).json({ msg: "The user already exists" });
	}
	const newUser = new User(req.body);
	await newUser.save();

	return res.status(201).json(newUser);
};

// * entrar
export const logIn = async (req: Request, res: Response) => {
	if (!req.body.username || !req.body.password) {
		return res
			.status(400)
			.json({ msg: "Please, send your username and password" });
	}
	const user = await User.findOne({ username: req.body.username });
	if (!user) {
		return res.status(400).json({ msg: "This user doesn't exists" });
	}

	const isMatch = await user.comparePassword(req.body.password);
	if (isMatch) {
		return res.status(200).json({ token: createToken(user) });
	}

	return res.status(400).json({ msg: "The username or password are incorrect" });
};
