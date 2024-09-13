import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Undo } from "lucide-react";

const UndoButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Undo />
        </TooltipTrigger>
        <TooltipContent>
          <p>Undo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UndoButton;
