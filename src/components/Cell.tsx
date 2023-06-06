import classNames from "classnames";
import { TETROMINOS } from "../utils/tetromino";

interface CellProps {
    type: string;
}

export const Cell = ({ type }: CellProps) => {
    const cellColor = TETROMINOS[type].color;
    const borderTLColor = TETROMINOS[type].borderTLColor;
    const borderBRColor = TETROMINOS[type].borderBRColor;

    return (
        <div
            className={classNames(
                type !== "X" && `border-4 ${borderTLColor} ${borderBRColor}`,
                cellColor,
                "h-8 w-8 justify-center flex-none"
            )}
        />
    );
};
