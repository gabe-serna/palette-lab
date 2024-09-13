import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useTheme } from "@/components/theme-provider";

const AddColor = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme == "dark";
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (isDark) setTheme("light");
              else setTheme("dark");
            }}
          >
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:scale-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isDark && <p>Toggle Light Mode</p>}
          {!isDark && <p>Toggle Dark Mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
