import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { defaultColors, generateColor } from "./utils/generateColor";
import { useLocation } from "react-router-dom";
import updateColorVariables from "./utils/updateColorVariables";

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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const colorParams = queryParams.get("colors");
  let queryColors: SelectedColorType[] = [];
  if (colorParams) {
    const colorArray = colorParams.split("-");
    queryColors = colorArray.map(color => {
      return { color, locked: false };
    });
    while (queryColors.length < 3) {
      queryColors.push(generateColor());
    }
    updateColorVariables(queryColors);
  }
  const startingColors = queryColors.length > 0 ? queryColors : defaultColors;
  const [colors, setColors] = useState<SelectedColorType[]>(startingColors);
  const [undoTree, setUndoTree] = useState<SelectedColorTypeArray[]>([]);
  const [redoTree, setRedoTree] = useState<SelectedColorTypeArray[]>([]);
  const isMounted = useRef(false);

  //Undo Logic
  useEffect(() => {
    if (!isMounted.current) return;
    setUndoTree(prevUndoTree => {
      //If the undo tree is at max capacity, remove the oldest entry
      if (prevUndoTree.length >= 25) {
        return [...prevUndoTree.slice(1), { history: [...colors] }];
      }
      if (prevUndoTree[prevUndoTree.length - 2]?.history === colors) {
        const cleanedUndoTree = [...prevUndoTree.slice(0, prevUndoTree.length - 1)];
        return cleanedUndoTree;
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
