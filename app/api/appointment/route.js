import { connectDB } from "@/lib/mongodb";
import { Appointment } from "@/models/Appointment";
import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.formData();

    const patient = formData.get('patient_name');
    const phone = formData.get('phone');
    const doctor_name = formData.get('doctor_name');
    const date = formData.get('date');
    const time = formData.get('time');

    try {
        await connectDB();
        const newAppointment = new Appointment({
            patient_name: patient,
            phone,
            doctor_name,
            date,
            time
        });

        await newAppointment.save();

        return NextResponse.json({ message: "Appointment created successfully" }, { status: 201 });

    } catch (error) {
        console.error("Failed to create appointment:", error);
        return NextResponse.json({ message: "Failed to create appointment", error: error.message }, { status: 500 });
    }
}
