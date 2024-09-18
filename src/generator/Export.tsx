import { ColorContext } from "@/ColorProvider";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTextColor } from "@/utils/getTextColor";
import VisuallyHidden from "@/utils/VisuallyHidden";
import { Download } from "lucide-react";
import { useContext } from "react";

const Export = () => {
  const context = useContext(ColorContext);
  const { colors } = context!;

  const textColor = getTextColor(colors[2].color);
  let baseText = "";
  if (textColor.includes("foreground")) baseText = "text-foreground ";
  else baseText = "text-background ";
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <Download />
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Export Colors</DialogTitle>
        </VisuallyHidden>
        <Tabs defaultValue="export" className="w-[400px]">
          <TabsList>
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
          <TabsContent value="export">
            <div className="flex items-start pt-4 pb-6 h-44">
              Make changes to your account here.
            </div>
          </TabsContent>
          <TabsContent value="options">
            <div className="flex flex-col items-start w-full px-20 pt-6 h-44">
              <RadioGroup defaultValue="hex" className="w-full">
                <div className="flex flex-row justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="hex"
                        id="hex"
                        className="size-[1.125rem]"
                      />
                      <Label htmlFor="hex" className="text-md">
                        HEX
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="rgb"
                        id="rgb"
                        className="size-[1.125rem]"
                      />
                      <Label htmlFor="rgb" className="text-md">
                        RGB
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="hsl"
                        id="hsl"
                        className="size-[1.125rem]"
                      />
                      <Label htmlFor="hsl" className="text-md">
                        HSL
                      </Label>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="oklab"
                        id="oklab"
                        className="size-[1.125rem]"
                      />
                      <Label htmlFor="oklab" className="text-md">
                        OKLAB
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="oklch"
                        id="oklch"
                        className="size-[1.125rem]"
                      />
                      <Label htmlFor="oklch" className="text-md">
                        OKLCH
                      </Label>
                    </div>
                  </div>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-2">
                <Switch id="shades" />
                <Label htmlFor="shades" className="text-md">
                  Shades
                </Label>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Export;
