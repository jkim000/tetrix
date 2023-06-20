export type TetrominoType = {
    shape: string[][];
    color: string;
    borderTLColor: string;
    borderBRColor: string;
};

export type TetrominosType = {
    [block_type: string]: TetrominoType;
};
