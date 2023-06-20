import classNames from "classnames";
import { TETROMINOS } from "../utils/constants";

interface CellProps {
    type: string;
}

export const Cell = ({ type }: CellProps) => {
    const cellColor: string = TETROMINOS[type].color;
    const borderTLColor: string = TETROMINOS[type].borderTLColor;
    const borderBRColor: string = TETROMINOS[type].borderBRColor;

    return (
        <div
            className={classNames(
                type !== "X" ? "border-4" : "border",
                cellColor,
                borderTLColor,
                borderBRColor,
                "w-auto justify-center flex-none"
            )}
        />
    );
};
