import { SelectedColorType } from "@/ColorProvider";

const getColorParams = (newColors: SelectedColorType[]) => {
  let colorParams = "";
  newColors.forEach((color, index) => {
    colorParams += color.color;
    if (index !== newColors.length - 1) {
      colorParams += "-";
    }
  });
  return colorParams;
};
export default getColorParams;
