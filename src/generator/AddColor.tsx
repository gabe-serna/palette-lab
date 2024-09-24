import { PlusCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { generateColor } from "@/utils/generateColor";
import { useContext } from "react";
import { ColorContext } from "@/ColorProvider";
import { useSearchParams } from "react-router-dom";
import getColorParams from "@/utils/getColorParams";
import updateColorVariables from "@/utils/updateColorVariables";

const AddColor = () => {
  const [, setSearchParams] = useSearchParams();
  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const hideIfMaxLength = colors.length === 6 ? "invisible" : "visible";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={hideIfMaxLength}
          onClick={event => {
            const target = event.currentTarget as HTMLButtonElement;
            target.blur();
            setRedoTree([]);

            const newColors = [...colors, generateColor()];
            setColors(newColors);
            updateColorVariables(newColors);

            const colorParams = getColorParams(newColors);
            setSearchParams({ colors: colorParams });
          }}
        >
          <PlusCircle className="3xl:size-9 2xl:size-7 xl:size-6 lg:size-5" />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Add Color</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
