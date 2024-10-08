import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Switch } from "@/components/ui/switch";
import { TabsContent } from "@/components/ui/tabs";
import { ExportContext } from "@/ExportProvider";
import { useContext } from "react";

interface Props {
  value: string;
}

const OptionsTab = ({ value }: Props) => {
  const { options, setOptions } = useContext(ExportContext)!;
  return (
    <TabsContent value={value}>
      <div className="flex flex-col items-start w-full px-2 pt-6 h-44">
        <RadioGroup defaultValue={options.format} className="w-full">
          <div className="flex flex-row justify-start gap-10 mb-4">
            <div>
              <div className="flex items-center space-x-2 max-2xl:mb-2 2xl:mb-1">
                <RadioGroupItem
                  value="hex"
                  id="hex"
                  className="3xl:size-[1.625rem] 2xl:size-5 lg:size-[1.125rem]"
                  onClick={() => {
                    setOptions({ ...options, format: "hex" });
                  }}
                />
                <Label htmlFor="hex" className="3xl:text-2xl 2xl:text-lg lg:text-md">
                  HEX
                </Label>
              </div>
              <div className="flex items-center space-x-2 max-2xl:mb-2 2xl:mb-1">
                <RadioGroupItem
                  value="rgb"
                  id="rgb"
                  className="3xl:size-[1.625rem] 2xl:size-5 lg:size-[1.125rem]"
                  onClick={() => {
                    setOptions({ ...options, format: "rgb" });
                  }}
                />
                <Label htmlFor="rgb" className="3xl:text-2xl 2xl:text-lg lg:text-md">
                  RGB
                </Label>
              </div>
              <div className="flex items-center space-x-2 max-2xl:mb-2 2xl:mb-1">
                <RadioGroupItem
                  value="hsl"
                  id="hsl"
                  className="3xl:size-[1.625rem] 2xl:size-5 lg:size-[1.125rem]"
                  onClick={() => {
                    setOptions({ ...options, format: "hsl" });
                  }}
                />
                <Label htmlFor="hsl" className="3xl:text-2xl 2xl:text-lg lg:text-md">
                  HSL
                </Label>
              </div>
            </div>
            {/* <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="oklab"
                  id="oklab"
                  className="size-[1.125rem]"
                  onClick={() => {
                    setOptions({ ...options, format: "oklab" });
                  }}
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
                  onClick={() => {
                    setOptions({ ...options, format: "oklch" });
                  }}
                />
                <Label htmlFor="oklch" className="text-md">
                  OKLCH
                </Label>
              </div>
            </div> */}
          </div>
        </RadioGroup>
        {/* <div className="flex items-center space-x-2">
          <Switch
            id="shades"
            onClick={() => {
              setOptions({ ...options, shades: !options.shades });
            }}
          />
          <Label htmlFor="shades" className="text-md">
            Shades
          </Label>
        </div> */}
      </div>
    </TabsContent>
  );
};

export default OptionsTab;
