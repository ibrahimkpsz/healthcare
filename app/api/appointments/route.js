import { getAppointments } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request) {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    const appointments = await getAppointments(status);

    return NextResponse.json(
        { appointments },
        {
            headers: {
                'Cache-Control': 'no-store',
            },
        }
    );
}
