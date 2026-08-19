import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BlackOak Global — Capital Deployed with Conviction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#0e0e0e",
          color: "#f5f5f2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#f5f5f299",
          }}
        >
          BlackOak Global
        </div>
        <div
          style={{
            fontSize: 96,
            lineHeight: 1.02,
            fontFamily: "serif",
            maxWidth: 900,
          }}
        >
          Capital Deployed with Conviction.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#f5f5f2aa",
          }}
        >
          <div>Dubai · London · Frontier & Emerging Markets</div>
          <div style={{ color: "#8a5a3b" }}>blackoakglobal.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
