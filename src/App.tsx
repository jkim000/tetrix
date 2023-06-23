import { useState, useEffect } from "react";

import { Gameboard } from "./components/Gameboard";
import { Scoreboard } from "./components/Scoreboard";
import { NextPiece } from "./components/NextPiece";
import { SavedPiece } from "./components/SavedPiece";
import { StartButton } from "./components/StartButton";
// import { GameOver } from "./components/GameOver";

import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";

import { createBoard } from "./utils/tetrisHelpers";

/**
 * FIX: Tetromino moves twice per keydown and I don't know why
 */

function App() {
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [linesCleared, setLinesCleared] = useState<number>(0);
    const [level, setLevel] = useState<number>(1);
    const [dropTime, setDropTime] = useState(null);

    const { player, updatePlayerPos, resetPlayer } = usePlayer();
    const [stage, setStage] = useStage(player);

    const startGame = () => {
        // reset everything
        setStage(createBoard());
        resetPlayer();
    };

    const moveTetrimino = (direction: 1 | -1) => {
        updatePlayerPos({ x: direction, y: 0 });
    };

    const dropTetrimino = () => {
        drop();
    };

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, hasCollided: false });
    };

    const rotateTetrimino = (rotation: "clockwise" | "counterclockwise") => {};

    const holdTetrimino = () => {};

    const pauseGame = () => {};

    const handleKeydownEvent = (key: string) => {
        if (!gameOver) {
            if (key === "ArrowLeft") moveTetrimino(-1);
            if (key === "ArrowRight") moveTetrimino(1);
            if (key === "ArrowDown") dropTetrimino();
            if (key === "ArrowUp") rotateTetrimino("clockwise");
            if (key === "D") rotateTetrimino("counterclockwise");
            if (key === "Space") drop();
            if (key === "F") holdTetrimino();
            if (key === "Escape") pauseGame();
        }
    };

    console.log("App Re-Render");

    return (
        <div
            className='w-screen h-screen py-12 font-mono'
            role='button'
            tabIndex={0}
            onKeyDown={(e) => handleKeydownEvent(e.key)}
        >
            <h1 className='text-center text-4xl'>TETRIX</h1>
            <main className='flex flex-row justify-evenly items-start gap-12 w-full h-full px-12 py-12'>
                <div className='w-32 h-32 border border-blue-400'>
                    <SavedPiece />
                </div>
                <div className='min-w-[350px] w-[350px] h-[700px]'>
                    <Gameboard stage={stage} />
                </div>
                <div className='w-48 flex flex-col gap-8 border border-purple-600'>
                    <NextPiece />
                    <Scoreboard
                        score={score}
                        level={level}
                        linesRecentlyCleared={linesCleared}
                    />
                    {/* {gameOver && <StartButton onClick={startGame} />} */}
                    {/* for testing only below, for reals above */}
                    <StartButton onClick={startGame} />
                </div>
            </main>
        </div>
    );
}

export default App;
