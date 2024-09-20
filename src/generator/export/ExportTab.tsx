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
        <pre
          id="export-output"
          className="relative w-full h-full row-start-2 px-4 py-2 mb-auto overflow-auto font-mono text-lg border pointer-events-auto bg-card rounded-xl border-secondary text-foreground/80 "
        ></pre>
        <button
          className="absolute w-16 h-6 text-sm font-medium rounded-lg bg-accent right-16 bottom-5 pointer-events-auto text-background transition-colors hover:bg-[hsl(from_hsl(var(--accent))_h_calc(s_*_1)_calc(l_*_0.8))]"
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
