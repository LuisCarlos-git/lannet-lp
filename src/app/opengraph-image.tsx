import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lannet — Internet Fibra Óptica e Rural";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        background:
          "radial-gradient(circle at 70% 50%, rgba(38,75,255,0.35) 0%, #0b0f19 70%)",
        color: "#f3f4f6",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#a3beff",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Lannet
      </div>
      <div
        style={{
          fontSize: 84,
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 32,
          maxWidth: 980,
          letterSpacing: -1,
        }}
      >
        Internet fibra óptica e rural de alta performance.
      </div>
      <div
        style={{
          fontSize: 30,
          color: "#9ca3af",
          marginTop: 32,
          maxWidth: 900,
        }}
      >
        Wi-Fi 6 incluso, suporte 24/7, planos a partir de R$ 99.
      </div>
    </div>,
    { ...size },
  );
}
