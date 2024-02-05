import express from "express";
import auth from "./router/user.js";
const app = express();

app.use(express.json());

app.use("/auth", auth);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
