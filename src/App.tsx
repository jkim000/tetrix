import { useState, useEffect } from "react";
import { Gameboard } from "./components/Gameboard";
import { GameOver } from "./components/GameOver";
import { Scoreboard } from "./components/Scoreboard";
import { NextPiece } from "./components/NextPiece";
import { SavedPiece } from "./components/SavedPiece";
import { createBoard } from "./utils/constants";

function App() {
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [linesCleared, setLinesCleared] = useState(0);
    const [level, setLevel] = useState(1);

    useEffect(() => {
        if (gameOver) {
            console.log("it's game over, do something");
        }
    }, [gameOver]);

    const handleGameOver = () => {
        setGameOver(true);
    };

    const handleScoreUpdate = (newScore: number) => {
        setScore(newScore);
    };

    const handleLinesClearedUpdate = (newLinesCleared: number) => {
        setLinesCleared(newLinesCleared);
    };

    const handleLevelUpdate = (newLevel: number) => {
        setLevel(newLevel);
    };

    return (
        <div className='w-screen h-screen'>
            <h1 className='text-center'>TETRIX</h1>
            <div className='flex flex-row justify-between p-24 border border-red-500'>
                <div className='border border-blue-400'>
                    <SavedPiece />
                </div>
                <div className='max-w-4xl border border-green-500'>
                    <Gameboard
                        stage={createBoard()}
                        gameOver={gameOver}
                        onGameOver={handleGameOver}
                        onScoreUpdate={handleScoreUpdate}
                        onLinesCleared={handleLinesClearedUpdate}
                        onLevelUpdate={handleLevelUpdate}
                    />
                </div>
                <div className='flex flex-col border border-purple-600'>
                    <NextPiece />
                    <Scoreboard
                        score={score}
                        level={level}
                        linesRecentlyCleared={linesCleared}
                    />
                    {gameOver && <button onClick={() => {}}>Start Game</button>}
                </div>
            </div>
        </div>
    );
}

export default App;
