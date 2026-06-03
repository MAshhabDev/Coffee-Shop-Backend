import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.connection_string,
});

export const initDB = async () => {
  // users table
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role VARCHAR(20) DEFAULT 'users',

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()

        )
        `);

  // Coffees table

  await pool.query(`
            CREATE TABLE IF NOT EXISTS coffees(
            id SERIAL PRIMARY KEY,

            name VARCHAR(20) NOT NULL,
            category VARCHAR(50) NOT NULL,
            price int,
           created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()


            )
            `);

  // Orders Table

  await pool.query(`
                CREATE TABLE IF NOT EXISTS orders(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,

            total_price int,
            status VARCHAR(50) DEFAULT 'pending',
           created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
  )
                `);

  await pool.query(`
                CREATE TABLE IF NOT EXISTS order_items(
            id SERIAL PRIMARY KEY,
            order_id INT  REFERENCES orders(id) ON DELETE CASCADE,
            coffee_id INT  REFERENCES coffees(id) ON DELETE CASCADE,
price int,
            quantity int,
           created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
  )
                `);
};
