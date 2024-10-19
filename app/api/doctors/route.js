import { getDoctors } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET() {
    const doctors = await getDoctors();

    return NextResponse.json(
        { doctors },
        {
            headers: {
                'Cache-Control': 'no-store',
            },
        }
    );
}
