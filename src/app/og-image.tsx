import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

type OgFontWeight = 400 | 600 | 700;

import { brandColors } from "@/lib/brand";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const PLUS_JAKARTA_CSS_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap";

const OG_FONT_FAMILY = "Plus Jakarta Sans";

async function loadPlusJakartaLatinWeights(
  weights: readonly OgFontWeight[]
): Promise<
  { name: string; data: ArrayBuffer; weight: OgFontWeight; style: "normal" }[]
> {
  const css = await fetch(PLUS_JAKARTA_CSS_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  }).then((res) => res.text());

  const weightToUrl = new Map<number, string>();
  const latinSegments = css.split("/* latin */").slice(1);

  for (const segment of latinSegments) {
    const face = segment.match(/@font-face\s*\{([\s\S]*?)\}/);
    if (!face) continue;
    const block = face[1];
    const w = Number(block.match(/font-weight:\s*(\d+)/)?.[1]);
    const fontUrl = block.match(
      /src:\s*url\((https:\/\/fonts\.gstatic\.com[^)]+)\)\s*format\(['"]woff2['"]\)/,
    )?.[1];
    if (w && fontUrl && !weightToUrl.has(w)) weightToUrl.set(w, fontUrl);
  }

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: OgFontWeight;
    style: "normal";
  }[] = [];

  for (const weight of weights) {
    const fontUrl = weightToUrl.get(weight);
    if (!fontUrl) continue;
    const data = await fetch(fontUrl).then((r) => r.arrayBuffer());
    fonts.push({ name: OG_FONT_FAMILY, data, weight, style: "normal" });
  }

  return fonts;
}

async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const buf = await readFile(join(process.cwd(), "public", "logo.png"));
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [fonts, logoSrc] = await Promise.all([
    loadPlusJakartaLatinWeights([400, 600, 700]),
    loadLogoDataUrl(),
  ]);

  const { background, foreground, primary, muted, accent, accentStrong } =
    brandColors;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 60px",
          background: `linear-gradient(155deg, ${background} 0%, ${accent} 42%, ${background} 88%)`,
          color: foreground,
          fontFamily: `${OG_FONT_FAMILY}, system-ui, sans-serif`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 90% 70% at 100% 0%, ${accentStrong}22 0%, transparent 55%)`,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt=""
              height={56}
              width={56}
              style={{ height: 56, width: 56, objectFit: "contain" }}
            />
          ) : (
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: `${primary}22`,
                border: `2px solid ${accentStrong}44`,
              }}
            />
          )}
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: -0.4,
              color: primary,
              maxWidth: 720,
              lineHeight: 1.2,
            }}
          >
            {SITE_NAME}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.06,
              fontWeight: 700,
              maxWidth: 980,
              letterSpacing: -1.2,
              color: foreground,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.28,
              color: muted,
              maxWidth: 980,
              fontWeight: 400,
            }}
          >
            Abono orgánico, gallinaza y biol líquido para cultivos más sanos y
            productivos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            alignItems: "center",
            fontSize: 24,
            color: primary,
            fontWeight: 600,
            zIndex: 1,
          }}
        >
          <span>Abono orgánico</span>
          <span style={{ color: `${muted}99` }}>·</span>
          <span>Gallinaza</span>
          <span style={{ color: `${muted}99` }}>·</span>
          <span>Biol líquido</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  );
}
