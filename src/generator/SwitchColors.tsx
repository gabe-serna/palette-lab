import { ColorContext } from "@/ColorProvider";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowDownUp } from "lucide-react";
import { useContext } from "react";

interface Props {
  index: number;
  switchColor: string;
}

const SwitchColors = ({ index, switchColor }: Props) => {
  const context = useContext(ColorContext);
  const { colors, setColors } = context!;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          data-color={switchColor}
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
      </Tooltip>
    </TooltipProvider>
  );
};

export default SwitchColors;
