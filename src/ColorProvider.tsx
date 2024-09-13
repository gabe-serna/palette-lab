import { createContext, ReactNode, useState } from "react";
import { generateColors } from "./utils/generateColor";

export interface ColorContextType {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}
export const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<string[]>(generateColors(3));

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};
