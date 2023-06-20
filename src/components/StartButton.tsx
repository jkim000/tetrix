interface StartButtonProps {
    onClick: () => void;
}

export const StartButton = ({ onClick }: StartButtonProps) => {
    return (
        <button
            onClick={onClick}
            className='w-3/4 h-10 bg-blue-400 rounded-xl font-bold text-xl hover:bg-blue-700 active:bg-green-700'
        >
            Start
        </button>
    );
};
