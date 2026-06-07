import { pool } from "../../db";
import type { ICoffee } from "./coffee.interface";

const createCoffeeInToDb = async (payload: ICoffee) => {
  const { name, category, price } = payload;
  const result = await pool.query(
    `INSERT INTO coffees (name, category, price) VALUES ($1, $2, $3) RETURNING *`,
    [name, category, price],
  );
  return result.rows[0];
};

const getCoffeeInToDb = async () => {
  const result = await pool.query(`SELECT * FROM coffees`);
  return result.rows; 
};

const deleteCoffeeInToDb = async (id: string) => {
  const result = await pool.query(
    `DELETE FROM coffees WHERE id=$1 RETURNING *`, 
    [id],
  );
  return result.rows[0]; 
};

export const coffeeService = { createCoffeeInToDb, getCoffeeInToDb, deleteCoffeeInToDb };