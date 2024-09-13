import { MinusCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useContext } from "react";
import { ColorContext } from "@/ColorProvider";

const AddColor = () => {
  const context = useContext(ColorContext);
  const { colors, setColors } = context!;
  const hideIfMinLength = colors.length === 3 ? "invisible" : "visible";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={hideIfMinLength}
          onClick={event => {
            const target = event.currentTarget as HTMLButtonElement;
            target.blur();
            const newColors = [...colors];
            newColors.pop();
            setColors(newColors);
          }}
        >
          <MinusCircle />
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Remove a Color</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
