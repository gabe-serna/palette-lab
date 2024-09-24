import { TabsContent } from "@/components/ui/tabs";
import { ExportContext } from "@/ExportProvider";
import { useContext } from "react";
import { toast } from "sonner";

interface Props {
  value: string;
  baseText: string;
}

const ExportTab = ({ value, baseText }: Props) => {
  const { options, setOptions } = useContext(ExportContext)!;
  return (
    <TabsContent
      value={value}
      tabIndex={-1}
      className={
        "3xl:h-[40rem] 2xl:h-[32rem] lg:h-[24rem] " +
        "row-start-2 pointer-events-none focus:outline-0 focus:border-0"
      }
    >
      <div
        className={
          "3xl:grid-rows-[4.125rem_1fr] 2xl:grid-rows-[3.25rem_1fr] lg:grid-rows-[2.75rem_1fr] " +
          "grid gap-4 pt-6 h-full pointer-events-none overflow-clip"
        }
      >
        <div
          className={
            "3xl:py-[6px] 3xl:px-[0.475rem] 2xl:py-[5px] 2xl:px-[0.375rem] lg:py-1 px-1 " +
            "3xl:gap-3 2xl:gap-2 lg:gap-1 " +
            "flex items-center overflow-clip pointer-events-auto justify-start w-full h-full row-start-1 bg-[hsl(from_hsl(var(--primary))_h_calc(s_*_1)_calc(l_*_0.75))] rounded-xl"
          }
        >
          <button
            value="css"
            data-checked={options.output === "css"}
            onClick={() => {
              setOptions({ ...options, output: "css" });
            }}
            className={
              baseText +
              "3xl:text-2xl 3xl:px-6 2xl:text-lg 2xl:px-4 " +
              "px-3 font-medium rounded-lg h-full w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
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
              "3xl:text-2xl 3xl:px-6 2xl:text-lg 2xl:px-4 " +
              "px-3 font-medium rounded-lg h-full w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
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
              "3xl:text-2xl 3xl:px-6 2xl:text-lg 2xl:px-4 " +
              "px-3 font-medium rounded-lg h-full w-min data-[checked=true]:bg-background data-[checked=true]:text-foreground text-nowrap transition-colors"
            }
          >
            SCSS
          </button>
        </div>
        <pre
          id="export-output"
          className={
            "3xl:text-3xl 3xl:[line-height:2.75rem] border-2 " +
            "2xl:text-2xl 2xl:font-normal 2xl:[line-height:2.25rem] lg:text-lg " +
            "3xl:px-7 3xl:py-6 2xl:px-6 2xl:py-4 lg:px-4 lg:py-2 " +
            "relative w-full h-full row-start-2 mb-auto overflow-auto font-mono border pointer-events-auto bg-card rounded-xl border-secondary text-foreground/80"
          }
        ></pre>
        <button
          className={
            "3xl:w-[7rem] 3xl:h-[2.625rem] 3xl:text-2xl 3xl:bottom-[3.125rem] 3xl:rounded-2xl " +
            "2xl:w-[5rem] 2xl:h-[1.875rem] 2xl:rounded-xl 2xl:text-lg 2xl:bottom-[1.875rem]  " +
            "lg:w-[4rem] lg:h-[1.5rem] 3xl:right-[7.5rem] 2xl:right-[6rem] right-16 bottom-5 " +
            "absolute text-sm font-medium rounded-lg bg-accent pointer-events-auto text-background transition-colors hover:bg-[hsl(from_hsl(var(--accent))_h_calc(s_*_1)_calc(l_*_0.8))]"
          }
          value="copy"
          onClick={() => {
            const output = document.getElementById("export-output")!;
            const sel = window.getSelection();
            if (!sel) return;
            if (sel.toString() == "") {
              window.setTimeout(() => {
                const range = document.createRange();
                range.selectNodeContents(output);
                sel.removeAllRanges();
                sel.addRange(range);
                navigator.clipboard.writeText(sel.toString());
                toast("Copied to clipboard");
              }, 1);
            }
          }}
        >
          Copy
        </button>
      </div>
    </TabsContent>
  );
};

export default ExportTab;
