import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.json(); 

    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyH4N5IPop1I1I6GqoNdQO0OIlJ_6tfRoQHFXOzuKE_N6SPsV6KR-LjYGp36yMZ4Eg/exec"; // Replace with your URL

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", 
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting data" }, { status: 500 });
  }
}
