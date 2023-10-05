import { connectMongoDB } from "@/lib/mongodb";
import Blog from "@/models/blog";
import Image from "@/models/image";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const title = data.get("title");
    const image = file.name;
    if (!file) {
      return NextResponse.json({ message: "not found " }, { success: false });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    await connectMongoDB();
    await Blog.create({ image, title });
    return NextResponse.json({ message: "file uploaded" }, { success: true });
  } catch (error) {
    return NextResponse.json({ message: "error upload" }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const image = await Image.find();
  const titleImage = await Blog.find();
  return NextResponse.json({ image, titleImage });
}
