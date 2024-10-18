import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    doctor_name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "active"
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema)