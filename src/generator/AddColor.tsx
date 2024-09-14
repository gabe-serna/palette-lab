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

const AddColor = () => {
  const context = useContext(ColorContext);
  const { colors, setColors } = context!;

  const hideIfMaxLength = colors.length === 6 ? "invisible" : "visible";
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={hideIfMaxLength}
          onClick={event => {
            const target = event.currentTarget as HTMLButtonElement;
            target.blur();
            const newColor = generateColor();
            setColors([...colors, newColor]);
          }}
        >
          <PlusCircle />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Add Color</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
