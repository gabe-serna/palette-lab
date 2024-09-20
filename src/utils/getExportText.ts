import { SelectedColorType } from "@/ColorProvider";
import { ExportOptions } from "@/ExportProvider";

interface ExportTextProps {
  colors: SelectedColorType[];
  options: ExportOptions;
}

const labels = [
  "background",
  "foreground",
  "primary",
  "accent",
  "accent-2",
  "accent-3"
];

export default function getExportText({ colors, options }: ExportTextProps) {
  const { format, output } = options;
  const outputDiv = document.getElementById("export-output");
  let formattedColors = [];
  let formattedText = "";

  switch (format) {
    case "hex":
    default: {
      const hexColors = colors.map(color => "#" + color.color);
      formattedColors = formatColors(hexColors, output);
      formattedText = formattedColors.join("\n");
      break;
    }
    case "rgb": {
      const rbgColors = hexToRGB(colors);
      formattedColors = formatColors(rbgColors, output);
      formattedText = formattedColors.join("\n");
      break;
    }
    case "hsl": {
      const hslColors = hexToHSL(colors);
      formattedColors = formatColors(hslColors, output);
      formattedText = formattedColors.join("\n");
      break;
    }
    // case "oklab":
    //   formattedColors = colors.map(color => color.color);
    //   formattedText = formattedColors.join("\n");
    //   break;
    // case "oklch":
    //   formattedColors = colors.map(color => color.color);
    //   formattedText = formattedColors.join("\n");
    //   break;
  }
  if (outputDiv) {
    outputDiv.innerHTML = formattedText;
  }
}

function formatColors(colors: string[], output: string) {
  const formattedColors = colors.map((color, index) => {
    switch (output) {
      case "css":
      default:
        return `--${labels[index]}: ${color};`;
      case "tailwind-css":
        return `\u0020\u0020'${labels[index]}': '${color}',`;
      case "scss":
        return `$${labels[index]}: ${color};`;
    }
  });
  if (output !== "tailwind-css") return formattedColors;
  formattedColors.unshift("colors: {");
  formattedColors.push("},");
  return formattedColors;
}

function hexToRGB(colors: SelectedColorType[]) {
  return colors.map(color => {
    const result = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.color)!;
    return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
      result[3],
      16
    )})`;
  });
}

function hexToHSL(colors: SelectedColorType[]) {
  return colors.map(color => {
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color.color);
    let r = parseInt(result![1], 16);
    let g = parseInt(result![2], 16);
    let b = parseInt(result![3], 16);
    let cssString = "";
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = (max + min) / 2;
    let l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    cssString = `hsl(${h}, ${s}%, ${l}%)`;

    return cssString;
  });
}
