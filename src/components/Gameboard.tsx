import { ROW_SIZE, COLUMN_SIZE } from "../utils/constants";

export const Gameboard = () => {
    const board: number[][] = new Array(ROW_SIZE); // board[rows][cols]

    for (let i = 0; i < ROW_SIZE; ++i) {
        const row: number[] = new Array(COLUMN_SIZE);
        row.fill(0);
        board[i] = row;
    }

    return <div>{board}</div>;
};
