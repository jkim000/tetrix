import classNames from "classnames";

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
    console.log("Scoreboard Props:", score, level, linesRecentlyCleared);

    return <div>{score}</div>;
};
