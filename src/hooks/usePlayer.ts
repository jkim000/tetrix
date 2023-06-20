import { useState } from "react";
import { createRandomTetromino } from "../utils/tetrisHelpers";
import { TetrominoType } from "../utils/types";

interface PlayerState {
    pos: { x: number; y: number };
    tetromino: TetrominoType;
    collided: boolean;
}

export const usePlayer = () => {
    const [player, setPlayer] = useState<PlayerState>({
        pos: { x: 0, y: 0 },
        tetromino: createRandomTetromino(),
        collided: false,
    });

    return [player];
};