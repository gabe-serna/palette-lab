import { ColorContext } from "@/ColorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Redo } from "lucide-react";
import { useContext } from "react";

const RedoButton = () => {
  const { setColors, redoTree, setRedoTree } = useContext(ColorContext)!;
  const redoAvailable = redoTree.length > 0;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            if (redoAvailable) {
              // setUndoTree([...undoTree, { history: colors }]);
              setColors(redoTree[redoTree.length - 1].history);
              setRedoTree(redoTree.slice(0, redoTree.length - 1));
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
