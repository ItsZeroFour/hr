import express from "express";
import { sendMail } from "../controllers/MailControllers.js";

const router = express.Router();

router.post("/sendMail", sendMail);

export default router;
