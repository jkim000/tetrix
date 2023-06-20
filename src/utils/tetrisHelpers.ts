import { COLUMN_SIZE, ROW_SIZE, TETROMINOS } from "./constants";
import { TetrominoType, StageType } from "./types";

export const createBoard = (): StageType => {
    return Array.from(Array(ROW_SIZE), () =>
        new Array(COLUMN_SIZE).fill(["X", "clear"])
    );
};

export const createRandomTetromino = (): TetrominoType => {
    const tetrominos = "OIZSLJT";
    const randomTetromino = tetrominos[Math.random() * tetrominos.length];

    return TETROMINOS[randomTetromino];
};
