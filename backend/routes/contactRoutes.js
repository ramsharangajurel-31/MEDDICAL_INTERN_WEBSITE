import express from "express";
import { getContactMessages, submitContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.route("/").get(getContactMessages).post(submitContactForm);

export default router;
