import { connectDB } from '@/lib/mongodb';
import { Appointment } from '@/models/Appointment';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await connectDB();
        const result = await Appointment.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            return NextResponse.json({ message: 'Appointment deleted successfully' });
        } else {
            return NextResponse.json({ message: 'Appointment not found' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting appointment', error }, { status: 500 });
    }
}
