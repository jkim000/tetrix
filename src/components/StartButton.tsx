interface StartButtonProps {
    callback: () => void;
}

export const StartButton = ({ callback }: StartButtonProps) => {
    return (
        <button
            onClick={callback}
            className='w-3/4 h-10 bg-blue-400 rounded-xl font-bold text-xl hover:bg-blue-700 active:bg-green-700'
        >
            Start
        </button>
    );
};
