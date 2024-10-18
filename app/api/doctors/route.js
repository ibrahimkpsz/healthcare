import { getDoctors } from "@/lib/actions";

export async function GET() {
    const doctor = await getDoctors();
    return Response.json({ doctor })
}