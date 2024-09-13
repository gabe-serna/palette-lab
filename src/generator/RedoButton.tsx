import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Redo } from "lucide-react";

const RedoButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Redo />
        </TooltipTrigger>
        <TooltipContent>
          <p>Redo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RedoButton;
