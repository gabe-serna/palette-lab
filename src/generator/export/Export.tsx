import { ColorContext } from "@/ColorProvider";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExportContext } from "@/ExportProvider";
import { getTextColor } from "@/utils/getTextColor";
import VisuallyHidden from "@/utils/VisuallyHidden";
import { Download } from "lucide-react";
import { useContext } from "react";
import OptionsTab from "./OptionsTab";

const Export = () => {
  const { options, setOptions } = useContext(ExportContext)!;
  const context = useContext(ColorContext);
  const { colors } = context!;

  const textColor = getTextColor(colors[2].color);
  let baseText = "";
  if (textColor.includes("foreground")) baseText = "text-foreground ";
  else baseText = "text-background ";

  //Height of Dialog is 30rem, 1.5rem padding y, tab padding bottom 1rem, tablist height 3rem
  //Export Box total height should then be 30 - 1.5 - 1 - 3 = 24.5rem
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <Download />
      </DialogTrigger>
      <DialogContent tabIndex={-1} className="focus:outline-0">
        <VisuallyHidden>
          <DialogTitle>Export Colors</DialogTitle>
        </VisuallyHidden>
        <Tabs
          defaultValue="export"
          className="grid grid-rows-[2.5rem_calc(100%-2.5rem)] w-full h-[calc(100%)] px-4 pb-4"
        >
          <TabsList className="row-start-1">
            <TabsTrigger
              value="export"
              className={
                baseText +
                "data-[state=active]:text-foreground data-[state=active]:bg-background"
              }
            >
              Export
            </TabsTrigger>
            <TabsTrigger
              value="options"
              className={
                baseText +
                "data-[state=active]:text-foreground data-[state=active]:bg-background"
              }
            >
              Options
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="export"
            tabIndex={-1}
            className="row-start-2 pointer-events-none focus:outline-0 focus:border-0 h-[24rem]"
          >
            <div className="grid grid-rows-[2.75rem_1fr] gap-4 pt-6 h-full pointer-events-none overflow-clip">
              <div className="flex items-center overflow-clip pointer-events-auto justify-start px-[0.25rem] gap-1 w-full h-full row-start-1 bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_1)_calc(l_*_0.75))] rounded-xl">
                <button
                  value="css"
                  data-checked={options.output === "css"}
                  onClick={() => {
                    setOptions({ ...options, output: "css" });
                  }}
                  className={
                    baseText +
                    "px-3 font-medium rounded-lg h-9 w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
                  }
                >
                  CSS
                </button>
                <button
                  value="tailwind-css"
                  data-checked={options.output === "tailwind-css"}
                  onClick={() => {
                    setOptions({ ...options, output: "tailwind-css" });
                  }}
                  className={
                    baseText +
                    "px-3 font-medium rounded-lg h-9 w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
                  }
                >
                  Tailwind CSS
                </button>
                <button
                  value="scss"
                  data-checked={options.output === "scss"}
                  onClick={() => {
                    setOptions({ ...options, output: "scss" });
                  }}
                  className={
                    baseText +
                    "px-3 font-medium rounded-lg h-9 w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
                  }
                >
                  SCSS
                </button>
              </div>
              <div
                id="export-output"
                className="relative w-full h-full row-start-2 px-4 py-2 mb-auto overflow-auto font-mono text-lg border pointer-events-auto bg-card rounded-xl border-accent text-foreground/80 "
              >
                <p>--text: #050315; </p>
                <p>--background: #fbfbfe;</p>
                <p>--primary: #2f27ce;</p>
                <p>--secondary: #dedcff;</p>
                <p>--accent: #433bff;</p>
              </div>
              <button
                className="absolute w-16 h-6 text-sm font-medium rounded-lg bg-secondary right-16 bottom-5 pointer-events-auto text-background transition-colors hover:bg-[hsl(from_hsl(var(--secondary))_h_calc(s_*_1)_calc(l_*_0.8))]"
                value="copy"
              >
                Copy
              </button>
            </div>
          </TabsContent>
          <OptionsTab value="options" />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Export;
