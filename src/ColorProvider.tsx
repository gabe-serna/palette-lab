import { createContext, ReactNode, useState } from "react";
import { generateColors } from "./utils/generateColor";

export interface SelectedColorType {
  color: string;
  locked: boolean;
}

export interface ColorContextType {
  colors: SelectedColorType[];
  setColors: React.Dispatch<React.SetStateAction<SelectedColorType[]>>;
}
export const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<SelectedColorType[]>(generateColors(3));

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};
