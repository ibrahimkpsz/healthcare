import { getAppointments } from "@/lib/actions";

export async function GET(request) {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    const appointments = await getAppointments(status);
    return Response.json({ appointments })
}