import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/user.js";
const router = express.Router();

router.get("/", getUser);
router.post("/createUser", createUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);
export default router;
