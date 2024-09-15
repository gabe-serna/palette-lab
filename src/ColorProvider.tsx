import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { defaultColors, generateColor } from "./utils/generateColor";
import { useLocation, Location } from "react-router-dom";
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
  function updateColorStateViaParams(location: Location) {
    const queryParams = new URLSearchParams(location.search);
    const colorParams = queryParams.get("colors");
    let queryColors: SelectedColorType[] = [];
    if (!colorParams) return queryColors;

    const colorArray = colorParams.split("-");
    queryColors = colorArray.map(color => {
      return { color, locked: false };
    });
    while (queryColors.length < 3) {
      queryColors.push(generateColor());
    }
    updateColorVariables(queryColors);
    return queryColors;
  }

  const location = useLocation();
  const queryColors = updateColorStateViaParams(location);

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

  //Update Color State when Query Params Change
  useEffect(() => {
    if (!isMounted.current) return;
    //Check if the colors in the query params are different from the current colors
    const queryParams = new URLSearchParams(location.search);
    const colorParams = queryParams.get("colors")!;
    const colorArray = colorParams.split("-");
    const isMatching = colors.some((color, index) => {
      if (color.color !== colorArray[index]) return false;
      else return true;
    });
    if (isMatching) return;
    setColors(prevColors => {
      const newColors: SelectedColorType[] = [];
      for (let i = 0; i < colorArray.length; i++) {
        newColors.push({
          color: colorArray[i],
          locked: prevColors[i]?.locked ?? false
        });
      }
      return newColors;
    });
  }, [location]);

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
