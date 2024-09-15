import { ColorContext } from "@/ColorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import getColorParams from "@/utils/getColorParams";
import updateColorVariables from "@/utils/updateColorVariables";
import { Redo } from "lucide-react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

const RedoButton = () => {
  const [, setSearchParams] = useSearchParams();
  const { setColors, redoTree, setRedoTree } = useContext(ColorContext)!;
  const redoAvailable = redoTree.length > 0;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            if (redoAvailable) {
              const newColors = redoTree[redoTree.length - 1].history;
              setColors(newColors);
              updateColorVariables(newColors);
              setRedoTree(redoTree.slice(0, redoTree.length - 1));

              const colorParams = getColorParams(newColors);
              setSearchParams({ colors: colorParams });
            }
          }}
        >
          <Redo className={redoAvailable ? "opacity-100" : "opacity-40"} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Redo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RedoButton;
