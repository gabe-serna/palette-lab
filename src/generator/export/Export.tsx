import { ColorContext } from "@/ColorProvider";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExportContext } from "@/ExportProvider";
import { getTextColor } from "@/utils/getTextColor";
import VisuallyHidden from "@/utils/VisuallyHidden";
import { Download } from "lucide-react";
import { useContext, useEffect } from "react";
import OptionsTab from "./OptionsTab";
import getExportText from "@/utils/getExportText";
import ExportTab from "./ExportTab";

const Export = () => {
  const { options } = useContext(ExportContext)!;
  const context = useContext(ColorContext);
  const { colors } = context!;

  const textColor = getTextColor(colors[2].color);
  let baseText = "";
  if (textColor.includes("foreground")) baseText = "text-foreground ";
  else baseText = "text-background ";

  useEffect(() => {
    getExportText({ colors, options });
  }, [colors, options]);

  return (
    <Dialog modal={false}>
      <DialogTrigger
        className="focus:outline-0"
        onClick={() => {
          setTimeout(() => {
            getExportText({ colors, options });
          }, 50);
        }}
      >
        <Download className="3xl:size-9 2xl:size-7 xl:size-6 lg:size-5" />
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
              onClick={() => {
                setTimeout(() => {
                  getExportText({ colors, options });
                }, 1);
              }}
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
          <ExportTab value="export" baseText={baseText} />
          <OptionsTab value="options" />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Export;
