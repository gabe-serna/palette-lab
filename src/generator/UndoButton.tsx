import { ColorContext } from "@/ColorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Undo } from "lucide-react";
import { useContext } from "react";

const UndoButton = () => {
  const { colors, setColors, undoTree, redoTree, setRedoTree } =
    useContext(ColorContext)!;
  const undoAvailable = undoTree.length > 1;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            if (undoAvailable) {
              setRedoTree([...redoTree, { history: colors }]);
              setColors(undoTree[undoTree.length - 2].history);
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
