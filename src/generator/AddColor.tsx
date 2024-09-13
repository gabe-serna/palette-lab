import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const AddColor = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Add</TooltipTrigger>
        <TooltipContent>
          <p>Add a new Color</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
