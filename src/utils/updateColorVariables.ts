import { SelectedColorType } from "@/ColorProvider";

const updateColorVariables = (colors: SelectedColorType[]) => {
  console.log("updating color variables");
  const labels = [
    "background",
    "foreground",
    "primary",
    "secondary",
    "accent",
    "accent-2"
  ];

  const root = document.documentElement;
  const length = colors.length;
  const HSLColors: string[] = [];
  colors.forEach(color => {
    const HSL = hexToHSL(color.color);
    HSLColors.push(HSL);
  });

  root.style.setProperty(`--${labels[0]}`, HSLColors[0]);
  root.style.setProperty(`--${labels[1]}`, HSLColors[1]);
  root.style.setProperty(`--${labels[2]}`, HSLColors[2]);
  switch (length) {
    case 3:
    default:
      for (let i = 3; i < 6; i++) {
        root.style.setProperty(`--${labels[i]}`, HSLColors[2]);
      }
      break;
    case 4:
      root.style.setProperty(`--${labels[3]}`, HSLColors[3]);
      root.style.setProperty(`--${labels[4]}`, HSLColors[3]);
      root.style.setProperty(`--${labels[5]}`, HSLColors[2]);
      break;
    case 5:
      root.style.setProperty(`--${labels[3]}`, HSLColors[3]);
      root.style.setProperty(`--${labels[4]}`, HSLColors[4]);
      root.style.setProperty(`--${labels[5]}`, HSLColors[3]);
      break;
    case 6:
      for (let i = 3; i < 6; i++) {
        root.style.setProperty(`--${labels[i]}`, HSLColors[i]);
      }
  }

  //Set Darkened Foreground Text Color
  const textColor = hexToHSL(colors[1].color);
  const textColors = textColor.split(" ");
  const l = textColors[2].replace("%", "");
  const textL = parseInt(l) * 0.75;

  root.style.setProperty(
    "--primary-foreground",
    `${textColors[0]} ${textColors[1]} ${textL}%`
  );

  //Set Card Color
  const cardColor = hexToHSL(colors[0].color);
  const cardColors = cardColor.split(" ");

  const s = cardColors[1].replace("%", "");
  const finalS = parseInt(s) * 0.4;

  const l2 = cardColors[2].replace("%", "");
  const finalL = parseInt(l2) * 2.5;

  root.style.setProperty("--card", `${cardColors[0]} ${finalS}% ${finalL}%`);
};

export default updateColorVariables;

function hexToHSL(hex: string) {
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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

  cssString = h + " " + s + "% " + l + "%";

  return cssString;
}
