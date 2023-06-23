export type TetrominoType = {
    shape: string[][];
    color: string;
    borderTLColor: string;
    borderBRColor: string;
};

export type TetrominosType = {
    [block_type: string]: TetrominoType;
};

export type StageType = string[][][];

export type PlayerState = {
    tetromino: TetrominoType["shape"];
    pos: { x: number; y: number };
    hasCollided: boolean;
};
