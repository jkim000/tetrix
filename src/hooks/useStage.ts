import { useState } from "react";
import { createBoard } from "../utils/tetrisHelpers";
import { StageType } from "../utils/types";
import { PlayerState } from "./usePlayer";

export const useStage = (
    player: PlayerState
): [StageType, React.Dispatch<React.SetStateAction<StageType>>] => {
    const [stage, setStage] = useState<StageType>(createBoard());

    console.log("player:", player);

    return [stage, setStage];
};
