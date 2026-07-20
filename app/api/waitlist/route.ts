import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { count, error } = await supabase
      .from("waitlist")
      .select("*", {
        count: "exact",
        head: true,
      });

    if (error) {
      console.error("Supabase count error:", error);

      return NextResponse.json(
        { error: "Failed to load waitlist count." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      count: count ?? 0,
    });
  } catch (error) {
    console.error("Waitlist count API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const normalizedEmail =
      typeof email === "string" ? email.trim().toLowerCase() : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { data: existingUser, error: lookupError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      console.error("Supabase lookup error:", lookupError);

      return NextResponse.json(
        { error: "Failed to check the waitlist." },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json({
        success: true,
        alreadyJoined: true,
        position: existingUser.id,
        message: "You're already on the waitlist.",
      });
    }

    const { data, error } = await supabase
      .from("waitlist")
      .insert({ email: normalizedEmail })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Failed to join the waitlist." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        alreadyJoined: false,
        position: data.id,
        message: "You're on the list. Welcome to Kyven.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
