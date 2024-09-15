import { SelectedColorType } from "@/ColorProvider";

export const defaultColors: SelectedColorType[] = [
  { color: "242424", locked: false },
  { color: "d0d0d0", locked: false },
  { color: "4595D3", locked: false },
  { color: "7D52B3", locked: false }
];

export const generateNewColors = (colors: SelectedColorType[]) => {
  const newColors = colors.map((color, index) => {
    if (color.locked) return color;
    switch (index) {
      case 0:
        return generateColorByType("Background");

      case 1:
        return generateColorByType("Foreground");

      case 2:
      case 3:
      case 4:
      case 5:
      default:
        return generateColorByType("Accent");
    }
  });
  return newColors;
};

function generateColorByType(type: "Background" | "Foreground" | "Accent") {
  switch (type) {
    case "Background": {
      const color = hslToHex(
        randomInt(0, 360),
        randomInt(42, 98),
        randomInt(2, 7)
      ).toUpperCase();
      return { color: color, locked: false };
    }
    case "Foreground": {
      const color = hslToHex(
        randomInt(0, 360),
        randomInt(5, 15),
        randomInt(70, 82)
      ).toUpperCase();
      return { color: color, locked: false };
    }
    case "Accent": {
      const color = hslToHex(
        randomInt(0, 360),
        randomInt(42, 98),
        randomInt(40, 60)
      ).toUpperCase();
      return { color: color, locked: false };
    }
  }
}

export const generateColor = () => {
  const color = hslToHex(
    randomInt(0, 360),
    randomInt(42, 98),
    randomInt(40, 90)
  ).toUpperCase();
  return { color: color, locked: false };
};

export const generateColors = (amount = 1) => {
  const colors: SelectedColorType[] = [];
  Array.from({ length: amount }).forEach(() => {
    const color = hslToHex(
      randomInt(0, 360),
      randomInt(42, 98),
      randomInt(40, 90)
    ).toUpperCase();
    colors.push({ color: color, locked: false });
  });
  return colors;
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `${f(0)}${f(8)}${f(4)}`;
}
