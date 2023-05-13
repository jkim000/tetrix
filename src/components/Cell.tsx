import classNames from "classnames";

interface ColorMap {
    [key: string]: string;
}

type CellType = typeof COLOR_MAP;

const COLOR_MAP: ColorMap = {
    background: "bg-zinc-900",
    o_block: "bg-yellow-400",
    i_block: "bg-blue-700",
    z_block: "bg-green-600",
    s_block: "bg-red-600",
    l_block: "bg-orange-600",
    j_block: "bg-pink-500",
    t_block: "bg-purple-800",
};

export const Cell = ({ type }: CellType) => {
    return (
        <div
            className={classNames(
                COLOR_MAP[type],
                "h-[48px] w-[48px] border border-1 justify-center"
            )}
        />
    );
};
