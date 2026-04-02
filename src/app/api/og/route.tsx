import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

function sanitize(input: string): string {
  return input.replace(/[<>"'&\\]/g, "").slice(0, 120);
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const rawTitle = searchParams.get("title");

  if (!rawTitle || rawTitle.length === 0) {
    return new Response("Missing title parameter", { status: 400 });
  }

  const title = sanitize(rawTitle);

  if (title.length === 0) {
    return new Response("Invalid title parameter", { status: 400 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#111111",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #00FFFF, transparent)",
          }}
        />

        {/* LS badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            border: "2px solid #00FFFF",
            borderRadius: "10px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#00FFFF", fontSize: "22px", fontWeight: 700 }}>LS</span>
        </div>

        {/* Title */}
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: title.length > 60 ? "40px" : "52px",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "24px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Proteção de dados, IAM, DLP e governança de TI em ambientes Microsoft 365.
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#00FFFF", fontSize: "18px", fontWeight: 600 }}>
            portfolio-lucaslopes.vercel.app
          </span>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span style={{ color: "#9CA3AF", fontSize: "16px" }}>Blue Team</span>
            <span style={{ color: "#1F1F1F", fontSize: "16px" }}>|</span>
            <span style={{ color: "#9CA3AF", fontSize: "16px" }}>IAM</span>
            <span style={{ color: "#1F1F1F", fontSize: "16px" }}>|</span>
            <span style={{ color: "#9CA3AF", fontSize: "16px" }}>DLP</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
