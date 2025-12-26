import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            name: "HealthCore",
            version: "0.1",
            status: "Running",
        },

        {
            name: "FlowEngine",
            version: "0.1",
            status: "Running",
        }
    ]);
}
