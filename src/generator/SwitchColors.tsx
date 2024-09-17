import { ColorContext } from "@/ColorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ArrowDownUp } from "lucide-react";
import { useContext } from "react";

interface Props {
  index: number;
  className?: string;
}

const SwitchColors = ({ index, className = "" }: Props) => {
  const context = useContext(ColorContext);
  const { colors, setColors } = context!;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            const newColors = [...colors];
            const color1 = newColors[index];
            const color2 = newColors[index + 1];
            newColors[index] = color2;
            newColors[index + 1] = color1;
            setColors(newColors);
          }}
        >
          <ArrowDownUp />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Switch Colors</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SwitchColors;
