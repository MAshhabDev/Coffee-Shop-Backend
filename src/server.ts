import express from "express";
import app from "./app";
import config from "./config";
import { initDB } from "./db";

const main = async () => {
  await initDB();
  app.listen(config.port, () => {
    console.log(`Coffee Server App Listening On Port ${config.port}`);
  });
};
main();
