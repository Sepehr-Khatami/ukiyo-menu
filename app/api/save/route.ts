import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Disabled in production", { status: 403 });
  }
  try {
    const data = await req.json();
    const filePath = path.join(process.cwd(), 'data', 'menu-items.json');

    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
