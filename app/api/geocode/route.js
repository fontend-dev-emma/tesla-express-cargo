import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Place name is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`, {
      headers: {
        "User-Agent": "Tesla Express Cargo/1.0 (velentralogistics@gmail.com)",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }

    const data = await response.json();

    if (data.length === 0) {
      return NextResponse.json({ error: "No results found" }, { status: 404 });
    }

    const { lat, lon, display_name } = data[0];

    return NextResponse.json({
      lat: parseFloat(lat),
      lng: parseFloat(lon),
      displayName: display_name,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
