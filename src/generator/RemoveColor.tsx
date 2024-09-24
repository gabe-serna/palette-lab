import { MinusCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useContext } from "react";
import { ColorContext } from "@/ColorProvider";
import { useSearchParams } from "react-router-dom";
import getColorParams from "@/utils/getColorParams";
import updateColorVariables from "@/utils/updateColorVariables";

const AddColor = () => {
  const [, setSearchParams] = useSearchParams();
  const context = useContext(ColorContext);
  const { colors, setColors, setRedoTree } = context!;

  const hideIfMinLength = colors.length === 3 ? "invisible" : "visible";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={hideIfMinLength}
          onClick={event => {
            const target = event.currentTarget as HTMLButtonElement;
            target.blur();
            setRedoTree([]);

            const newColors = [...colors];
            newColors.pop();
            setColors(newColors);
            updateColorVariables(newColors);

            const colorParams = getColorParams(newColors);
            setSearchParams({ colors: colorParams });
          }}
        >
          <MinusCircle className="3xl:size-9 2xl:size-7 xl:size-6 lg:size-5" />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Remove Color</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
