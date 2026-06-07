import { pool } from "../../db";
import bcrypt from "bcrypt";
import type { ILogin, IUser } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";

const signUpInToDb = async (payload: IUser) => {
  const { name, email, password, role } = payload;
  const hashPass = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `INSERT INTO users (name, email, password, role) VALUES($1, $2, $3, $4) RETURNING *`,
    [name, email, hashPass, role],
  );

  const user = result.rows[0];
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const logInToDb = async (payload: ILogin) => {
  const { email, password } = payload;
  const userData = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);

  if (userData.rows.length === 0) {
    throw new Error("Invalid Credentials!");
  }

  const user = userData.rows[0];
  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new Error("Invalid Credentials!");
  }

  const jwtpayload = {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  };

  const accessToken = jwt.sign(jwtpayload, config.secret as string, {
    expiresIn: "1d",
  });

  return { accessToken };
};

export const authService = { signUpInToDb, logInToDb };