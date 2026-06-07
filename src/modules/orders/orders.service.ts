import { pool } from "../../db";

const createOrdersInToDb = async (
  user_id: string,
  total_price: number,
  order_items: any[],
) => {
  const result = await pool.query(
    `INSERT INTO orders (user_id,total_price,status) VALUES($1,$2,$3) RETURNING *`,
    [user_id, total_price, "pending"],
  );

  const order_id = result.rows[0].id;

  for (const item of order_items) {
    const { coffee_id, quantity, price } = item;

    await pool.query(
      `INSERT INTO order_items (order_id, coffee_id, quantity, price) VALUES($1, $2, $3, $4)`,
      [order_id, coffee_id, quantity, price],
    );
  }

  return { order_id, total_price, status: "pending" };
};

const getMyOrdersInToDb = async (user_id:string) => {
  const result = await pool.query(
    ` SELECT * FROM ORDERS WHERE user_id=$1`,
    [user_id],
  );
  return result.rows
};


const getAllOrdersInToDb = async () => {
  const result = await pool.query(
    ` SELECT * FROM ORDERS`,
    
  );
  return result.rows
};

export const ordersService = { createOrdersInToDb,getMyOrdersInToDb,getAllOrdersInToDb };
