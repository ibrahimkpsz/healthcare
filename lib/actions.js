import { Appointment } from "@/models/Appointment";
import { Doctor } from "../models/Doctor";
import { connectDB } from "./mongodb";

export const getDoctors = async () => {
    try {
        connectDB();
        const doctors = await Doctor.find();
        return doctors;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAppointments = async (status) => {
    try {
        connectDB();

        const allowedStatus = ["active", "inactive", "canceled"];
        const query = allowedStatus.includes(status) ? { status: status } : {};

        const appointments = await Appointment.find(query);
        return appointments;
    } catch (error) {
        console.error(error);
        return null;
    }
}
