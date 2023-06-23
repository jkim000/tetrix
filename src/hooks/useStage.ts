import { useEffect, useState } from "react";
import { createBoard } from "../utils/tetrisHelpers";
import { StageType, PlayerState } from "../utils/types";

export const useStage = (
    player: PlayerState,
    resetPlayer?: () => void
): [StageType, React.Dispatch<React.SetStateAction<StageType>>] => {
    const [stage, setStage] = useState<StageType>(createBoard());

    useEffect(() => {
        const updateStage = (prevStage: StageType) => {
            const newStage = prevStage.map((row) =>
                row.map((cell) => (cell[1] === "clear" ? ["X", "clear"] : cell))
            );

            player.tetromino.forEach((row, y) => {
                row.forEach((shape, x) => {
                    if (shape !== "X") {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            shape,
                            `${player.hasCollided ? "merged" : "clear"}`,
                        ];
                    }
                });
            });

            return newStage;
        };

        setStage((prev) => updateStage(prev));
    }, [player]);

    return [stage, setStage];
};
