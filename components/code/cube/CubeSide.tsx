import { type Dispatch, type SetStateAction } from "react";

import { Face, type Selection } from "./GriddedCube";
import GridSquare from "./GridSquare";

interface CubeSideProps {
  rotation: [number, number, number];
  position: [number, number, number];
  gridSquareSize: number;
  face: Face;
  currentSelection: Selection;
  setCurrentSelection: Dispatch<SetStateAction<Selection>>;
  isHero?: boolean;
}

export default function CubeSide({
  rotation,
  position,
  gridSquareSize,
  face,
  currentSelection,
  setCurrentSelection,
  isHero = false,
}: CubeSideProps) {
  return (
    <group rotation={rotation} position={position}>
      {isHero ? (
        <GridSquare
          position={[0, 0, 0]}
          size={gridSquareSize * 2}
          face={face}
          index={0}
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          thickness={0.05}
        />
      ) : (
        <>
          <GridSquare
            position={[-gridSquareSize / 2, gridSquareSize / 2, 0]}
            size={gridSquareSize}
            face={face}
            index={0}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
          <GridSquare
            position={[gridSquareSize / 2, gridSquareSize / 2, 0]}
            size={gridSquareSize}
            face={face}
            index={1}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
          <GridSquare
            position={[-gridSquareSize / 2, -gridSquareSize / 2, 0]}
            size={gridSquareSize}
            face={face}
            index={2}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
          <GridSquare
            position={[gridSquareSize / 2, -gridSquareSize / 2, 0]}
            size={gridSquareSize}
            face={face}
            index={3}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
        </>
      )}
    </group>
  );
}
// {/* position places center of geometry -> we want center of side to be point where all squares come together */}
