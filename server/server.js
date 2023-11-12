import express from "express";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server @ ${PORT}`);
});
