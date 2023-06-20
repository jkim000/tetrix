import { useState } from "react";
import { createBoard } from "../utils/tetrisHelpers";

export const useStage = () => {
    const [stage, setStage] = useState(createBoard());

    return [stage, setStage];
};
