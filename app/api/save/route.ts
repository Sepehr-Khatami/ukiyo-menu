import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

type AppError = { message: string };

export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Disabled in production", { status: 403 });
  }

  try {
    const data = await req.json();
    const filePath = path.join(process.cwd(), "data", "menu-items.json");

    await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { success: false, error: (error as AppError).message },
      { status: 500 }
    );
  }
}
