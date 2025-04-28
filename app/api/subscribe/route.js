import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("planitDB");
    const collection = db.collection("subscribers");

    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Email already subscribed" }, { status: 200 });
    }

    await collection.insertOne({ email, createdAt: new Date() });

    return NextResponse.json({ message: "Subscribed successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  } finally {
    await client.close();
  }
}
