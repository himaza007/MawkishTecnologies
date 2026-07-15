import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const logoPath = join(process.cwd(), "public", "images", "brand", "logo-mark.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#114232",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoDataUri} width={24} height={16} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    size
  );
}
