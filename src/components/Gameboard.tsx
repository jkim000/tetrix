import { Cell } from "./Cell";

const COLUMN_SIZE = 10;
const ROW_SIZE = 20;

const BOARD_HEIGHT = "1000px";
const BOARD_WIDTH = "500px";

const cellTypeMap: string[] = [
    "background",
    "o_block",
    "i_block",
    "z_block",
    "s_block",
    "l_block",
    "j_block",
    "t_block",
];

export const Gameboard = () => {
    const board: number[][] = new Array(ROW_SIZE); // board[rows][cols]

    for (let i = 0; i < ROW_SIZE; ++i) {
        const row: number[] = new Array(COLUMN_SIZE);
        row.fill(0);
        board[i] = row;
    }

    return (
        <div className='flex justify-center w-full'>
            <div
                className={`flex flex-wrap w-[${BOARD_WIDTH}] h-[${BOARD_HEIGHT}] border border-1 border-black bg-slate-600`}
            >
                {board.map((row, rowIndex) => {
                    return row.map((cell, cellIndex) => {
                        return (
                            <Cell
                                key={`${rowIndex}-${cellIndex}`}
                                type={cellTypeMap[cell]}
                            />
                        );
                    });
                })}
            </div>
        </div>
    );
};
