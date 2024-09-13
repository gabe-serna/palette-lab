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
            className="border-0 hover:bg-transparent"
            variant="outline"
            size="icon"
            onClick={event => {
              const target = event.currentTarget as HTMLButtonElement;
              target.blur();
              if (isDark) setTheme("light");
              else setTheme("dark");
            }}
          >
            <Moon className="absolute transition-all scale-100 rotate-0 size-6 dark:-rotate-90 dark:scale-0" />
            <Sun className="transition-all scale-0 rotate-0 size-6 dark:scale-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {isDark && <p>Toggle Light Mode</p>}
          {!isDark && <p>Toggle Dark Mode</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddColor;
