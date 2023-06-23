import { Cell } from "./Cell";
import "./styles/GameboardStyles.css";

interface GameboardProps {
    stage: string[][][];
}

export const Gameboard = ({ stage }: GameboardProps) => {
    return (
        <div className='gameboard-container'>
            {stage.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell key={`${rowIndex}-${colIndex}`} type={cell[0]} />
                ))
            )}
        </div>
    );
};
