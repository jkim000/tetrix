const COLUMN_SIZE = 10;
const ROW_SIZE = 20;

export const createBoard = () => {
    return Array.from(Array(ROW_SIZE), () =>
        new Array(COLUMN_SIZE).fill(["X", "clear"])
    );
};
