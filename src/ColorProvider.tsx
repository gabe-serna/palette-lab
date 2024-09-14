import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { defaultColors } from "./utils/generateColor";
import { useLocation } from "react-router-dom";

interface SelectedColorTypeArray {
  history: SelectedColorType[];
}

export interface SelectedColorType {
  color: string;
  locked: boolean;
}

export interface ColorContextType {
  colors: SelectedColorType[];
  setColors: React.Dispatch<React.SetStateAction<SelectedColorType[]>>;
  undoTree: SelectedColorTypeArray[];
  setUndoTree: React.Dispatch<React.SetStateAction<SelectedColorTypeArray[]>>;
  redoTree: SelectedColorTypeArray[];
  setRedoTree: React.Dispatch<React.SetStateAction<SelectedColorTypeArray[]>>;
}

export const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<SelectedColorType[]>(defaultColors);
  console.log("colors", colors);
  const [undoTree, setUndoTree] = useState<SelectedColorTypeArray[]>([]);
  const [redoTree, setRedoTree] = useState<SelectedColorTypeArray[]>([]);
  const isMounted = useRef(false);

  const location = useLocation();

  // Query Params Logic
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const colorParams = queryParams.get("colors");
    if (colorParams) console.log(colorParams);
  }, [location.search]);

  //Undo Logic
  useEffect(() => {
    if (!isMounted.current) return;
    setUndoTree(prevUndoTree => {
      if (prevUndoTree[prevUndoTree.length - 2]?.history === colors) {
        const cleanedUndoTree = [...prevUndoTree.slice(0, prevUndoTree.length - 1)];
        return cleanedUndoTree;
      }
      if (prevUndoTree.length >= 25) {
        const cleanedUndoTree = [...prevUndoTree.slice(1)];
        return [...cleanedUndoTree, { history: [...colors] }];
      }
      return [...prevUndoTree, { history: [...colors] }];
    });
  }, [colors]);

  //Determine if the page is loaded
  useEffect(() => {
    const handleLoad = () => {
      isMounted.current = true;
      setUndoTree([{ history: [...colors] }]);
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <ColorContext.Provider
      value={{ colors, setColors, undoTree, setUndoTree, redoTree, setRedoTree }}
    >
      {children}
    </ColorContext.Provider>
  );
};
