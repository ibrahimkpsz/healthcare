import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
    }
},
    { timestamps: true }
);

export const Doctor = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema)