import { TetrominosType } from "./types";

export const COL_SIZE = 10;
export const ROW_SIZE = 20;

export const TETROMINOS: TetrominosType = {
    X: {
        shape: [["X"]],
        color: "bg-zinc-900",
        borderTLColor: "border-t-zinc-800 border-l-zinc-800",
        borderBRColor: "border-b-zinc-800 border-r-zinc-800",
    },
    O: {
        shape: [
            ["O", "O"],
            ["O", "O"],
        ],
        color: "bg-yellow-400",
        borderTLColor: "border-t-yellow-200 border-l-yellow-200",
        borderBRColor: "border-b-yellow-600 border-r-yellow-600",
    },
    I: {
        shape: [
            ["X", "I", "X", "X"],
            ["X", "I", "X", "X"],
            ["X", "I", "X", "X"],
            ["X", "I", "X", "X"],
        ],
        color: "bg-blue-700",
        borderTLColor: "border-t-blue-500 border-l-blue-500",
        borderBRColor: "border-b-blue-900 border-r-blue-900",
    },
    Z: {
        shape: [
            ["Z", "Z", "X"],
            ["X", "Z", "Z"],
            ["X", "X", "X"],
        ],
        color: "bg-green-600",
        borderTLColor: "border-t-green-400 border-l-green-400",
        borderBRColor: "border-b-green-800 border-r-green-800",
    },
    S: {
        shape: [
            ["X", "S", "S"],
            ["S", "S", "X"],
            ["X", "X", "X"],
        ],
        color: "bg-red-600",
        borderTLColor: "border-t-red-400 border-l-red-400",
        borderBRColor: "border-b-red-800 border-r-red-800",
    },
    L: {
        shape: [
            ["X", "L", "X"],
            ["X", "L", "X"],
            ["X", "L", "L"],
        ],
        color: "bg-orange-600",
        borderTLColor: "border-t-orange-400 border-l-orange-400",
        borderBRColor: "border-b-orange-800 border-r-orange-800",
    },
    J: {
        shape: [
            ["X", "J", "X"],
            ["X", "J", "X"],
            ["J", "J", "X"],
        ],
        color: "bg-pink-500",
        borderTLColor: "border-t-pink-300 border-l-pink-300",
        borderBRColor: "border-b-pink-700 border-r-pink-700",
    },
    T: {
        shape: [
            ["T", "T", "T"],
            ["X", "T", "X"],
            ["X", "T", "X"],
        ],
        color: "bg-violet-800",
        borderTLColor: "border-t-violet-600 border-l-violet-600",
        borderBRColor: "border-b-violet-950 border-r-violet-950",
    },
};
