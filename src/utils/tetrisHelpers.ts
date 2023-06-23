import { COL_SIZE, ROW_SIZE, TETROMINOS } from "./constants";
import { TetrominoType, StageType } from "./types";

export const createBoard = (): StageType => {
    return Array.from(Array(ROW_SIZE), () =>
        new Array(COL_SIZE).fill(["X", "clear"])
    );
};

export const createRandomTetromino = (): TetrominoType => {
    const tetrominos = ["O", "I", "Z", "S", "L", "J", "T"];
    const randomTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randomTetromino];
};
