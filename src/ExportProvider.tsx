import { createContext, useState } from "react";

interface ExportOptions {
  format: "hex" | "rgb" | "hsl" | "oklab" | "oklch";
  shades: boolean;
}
interface ExportState {
  options: ExportOptions;
  setOptions: (options: ExportOptions) => void;
}

interface ExportProviderProps {
  children: React.ReactNode;
}

export const ExportContext = createContext<ExportState | null>(null);

const ExportProvider = ({ children }: ExportProviderProps) => {
  const [options, setOptions] = useState<ExportOptions>({
    format: "hex",
    shades: false
  });
  return (
    <ExportContext.Provider value={{ options, setOptions }}>
      {children}
    </ExportContext.Provider>
  );
};

export default ExportProvider;
