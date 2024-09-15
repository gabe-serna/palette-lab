import { ColorContext } from "@/ColorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import getColorParams from "@/utils/getColorParams";
import { Undo } from "lucide-react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

const UndoButton = () => {
  const [, setSearchParams] = useSearchParams();
  const { colors, setColors, undoTree, redoTree, setRedoTree } =
    useContext(ColorContext)!;
  const undoAvailable = undoTree.length > 1;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            if (undoAvailable) {
              const newColors = undoTree[undoTree.length - 2].history;
              setColors(newColors);
              setRedoTree([...redoTree, { history: colors }]);

              const colorParams = getColorParams(newColors);
              setSearchParams({ colors: colorParams });
            }
          }}
        >
          <Undo className={undoAvailable ? "opacity-100" : "opacity-40"} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Undo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UndoButton;
