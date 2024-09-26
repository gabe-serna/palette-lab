export function getTextColor(hexColor: string, foreground: string) {
  // Convert hex to RGB
  const { r: r1, g: g1, b: b1 } = hexToRgb(hexColor);
  const { r: r2, g: g2, b: b2 } = hexToRgb(foreground);

  // Calculate luminance of the given color
  const colorLuminance = luminance(r1, g1, b1);

  // Luminance of foreground color
  const whiteLuminance = luminance(r2, g2, b2);

  // Calculate contrast ratio
  const contrast = contrastRatio(whiteLuminance, colorLuminance);
  const textColor =
    contrast >= 2 ? "hsl(var(--foreground))" : "hsl(var(--background))";
  return textColor;
}

function hexToRgb(hex: string) {
  // Remove the leading # (if present)
  hex = hex.replace(/^#/, "");

  // Parse hex values
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function luminance(r: number, g: number, b: number) {
  // Convert RGB to sRGB
  [r, g, b] = [r, g, b].map(value => {
    value /= 255;
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  });

  // Calculate luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(l1: number, l2: number) {
  // Ensure l1 is the lighter luminance
  [l1, l2] = [l1, l2].sort((a, b) => b - a);

  // Calculate contrast ratio
  return (l1 + 0.05) / (l2 + 0.05);
}
