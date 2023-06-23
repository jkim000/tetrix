import { useCallback, useState } from "react";
import { createRandomTetromino } from "../utils/tetrisHelpers";
import { PlayerState, MovementType } from "../utils/types";
import { COL_SIZE, TETROMINOS } from "../utils/constants";

export const usePlayer = () => {
    const [player, setPlayer] = useState<PlayerState>({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS["X"].shape,
        hasCollided: false,
    });

    const updatePlayerPos = ({ x, y, hasCollided }: MovementType) => {
        setPlayer((prev) => ({
            ...prev,
            pos: {
                x: (prev.pos.x += x),
                y: (prev.pos.y += y),
            },
            hasCollided,
        }));
    };

    const resetPlayer = useCallback(() => {
        const tetromino = createRandomTetromino().shape;
        const centerValue = tetromino[0][1] === "L" ? 2 : 1;

        setPlayer({
            pos: { x: COL_SIZE / 2 - centerValue, y: 0 },
            tetromino,
            hasCollided: false,
        });
    }, []);

    return { player, updatePlayerPos, resetPlayer };
};
