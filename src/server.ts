import express from "express";
import app from "./app";
import config from "./config";

const main = () => {
  app.listen(config.port, () => {
    console.log(`Coffee Server App Listening On Port ${config.port}`);
  });
};
main();
