import { ROWS, COLUMNS } from "../utils/constants";

export const Gameboard = () => {
    const board: number[][] = new Array(ROWS); // board[rows][cols]

    for (let i = 0; i < ROWS; ++i) {
        const row: number[] = new Array(COLUMNS);
        row.fill(0);
        board[i] = row;
    }

    return <div>{board}</div>;
};
