import { connectDB } from "@/lib/mongodb";
import { Doctor } from "@/models/Doctor";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();

        const newDoctor = new Doctor({
            name: body.name,
            surname: body.surname,
            department: body.department,
            email: body.email,
            phone: body.phone,
            photo: body.photo,
        });

        await newDoctor.save();

        return NextResponse.json({ message: "Doctor created successfully" }, { status: 201 });

    } catch (error) {
        console.error("Failed to create doctor:", error);
        return NextResponse.json({ message: "Failed to create doctor", error: error.message }, { status: 500 });
    }
}
