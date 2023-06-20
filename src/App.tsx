import { useState, useEffect } from "react";
import { Gameboard } from "./components/Gameboard";
// import { GameOver } from "./components/GameOver";
import { Scoreboard } from "./components/Scoreboard";
import { NextPiece } from "./components/NextPiece";
import { SavedPiece } from "./components/SavedPiece";
import { createBoard } from "./utils/tetrisHelpers";
import { StartButton } from "./components/StartButton";

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

    const onStartGameClick = () => {
        createBoard();
    };

    return (
        <div className='w-screen h-screen py-12 font-mono'>
            <h1 className='text-center text-4xl'>TETRIX</h1>
            <main className='flex flex-row justify-between items-start gap-12 w-full h-full px-12 py-12'>
                <div className='w-32 h-32 border border-blue-400'>
                    <SavedPiece />
                </div>
                <div className='min-w-[350px] w-[350px] h-[700px]'>
                    <Gameboard
                        stage={createBoard()}
                        gameOver={gameOver}
                        onGameOver={handleGameOver}
                        onScoreUpdate={handleScoreUpdate}
                        onLinesCleared={handleLinesClearedUpdate}
                        onLevelUpdate={handleLevelUpdate}
                    />
                </div>
                <div className='w-48 flex flex-col gap-8 border border-purple-600'>
                    <NextPiece />
                    <Scoreboard
                        score={score}
                        level={level}
                        linesRecentlyCleared={linesCleared}
                    />
                    <StartButton callback={onStartGameClick} />
                    {/* {gameOver && (
                        <button onClick={onStartGameClick}>Start Game</button>
                    )} */}
                </div>
            </main>
        </div>
    );
}

export default App;
