import express from "express";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.route("/").get(getAppointments).post(createAppointment);
router.route("/:id").put(updateAppointment).delete(deleteAppointment);

export default router;
