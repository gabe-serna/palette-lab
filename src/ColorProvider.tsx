import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { generateColors } from "./utils/generateColor";

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
  const [colors, setColors] = useState<SelectedColorType[]>(generateColors(3));
  const [undoTree, setUndoTree] = useState<SelectedColorTypeArray[]>([]);
  const [redoTree, setRedoTree] = useState<SelectedColorTypeArray[]>([]);
  const isMounted = useRef(false);

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
