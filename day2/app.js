import express from "express";
// import homeRouter from "./routes/home";
import router from "./routes";
import dotenv from "dotenv";

const app = express();
const port = 8000;

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use("/api", router);
// app.use(homeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
