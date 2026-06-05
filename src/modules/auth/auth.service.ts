import { pool } from "../../db";
import bcrypt from "bcrypt";
import type { IUser } from "./auth.interface";

const signUpInToDb = async (payload: IUser) => {
  const { name, email, password, role } = payload;
  const hashPass = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `INSERT INTO users (name,email, password,role) VALUES($1,$2,$3,$4)
    RETURNING *`,
    [name, email, hashPass, role],
  );

  delete result.rows[0].password;
  return result.rows[0];
};

export const authService = { signUpInToDb };
