interface ScoreboardProps {
    score: number;
    level: number;
    linesRecentlyCleared: number;
}

export const Scoreboard = ({
    score,
    level,
    linesRecentlyCleared,
}: ScoreboardProps) => {
    return (
        <div className='flex flex-col gap-8 text-xl uppercase'>
            <div className='flex justify-between items-center h-16 border-4 rounded-2xl border-slate-500 px-2'>
                <div>Level</div>
                <div>{level}</div>
            </div>
            <div className='flex justify-between items-center h-16 border-4 rounded-2xl border-slate-500 px-2'>
                <div>Score</div>
                <div>{score}</div>
            </div>
            <div className='flex justify-between items-center h-16 border-4 rounded-2xl border-slate-500 px-2'>
                <div>Lines</div>
                <div>{linesRecentlyCleared}</div>
            </div>
        </div>
    );
};
