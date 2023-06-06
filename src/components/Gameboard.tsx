import { Cell } from "./Cell";
import './styles/GameboardStyles.css'

interface GameboardProps {
    stage: string[][][];
    gameOver: boolean;
    onGameOver: () => void;
    onScoreUpdate: (newScore: number) => void;
    onLinesCleared: (newLinesCleared: number) => void;
    onLevelUpdate: (newLevel: number) => void;
}

export const Gameboard = ({
    stage,
    gameOver,
    onGameOver,
    onScoreUpdate,
    onLinesCleared,
    onLevelUpdate,
}: GameboardProps) => {
    console.log(
        "Gameboard Props",
        gameOver,
        onGameOver,
        onScoreUpdate,
        onLinesCleared,
        onLevelUpdate
    );

    /**
     * NOTE:
     * type should equal type={cell[0]} when done with development
     */

    return (
        <div className="gameboardGrid">
            {stage.map((row, rowIndex) =>
                row.map((cell, colIndex) => <Cell key={`${rowIndex}-${colIndex}`} type='J' />)
            )}
        </div>
    );
};
