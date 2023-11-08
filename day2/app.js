import express from "express";
import homeRouter from "./routes/home";
import productRouter from "./routes/product";
const app = express();
const port = 8000;

app.use(express.json());

app.use(productRouter);
app.use(homeRouter);

app.listen(8000, () => {
  console.log(`Server is running on ${port} port`);
});
