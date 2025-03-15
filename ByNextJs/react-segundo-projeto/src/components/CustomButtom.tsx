type Props = {
    label: string;
    onClicar: VoidFunction;
}

export const CustomButtom = ({label,onClicar}:Props) => {
    return (
        <button onClick={onClicar} className="p-3 text-white bg-blue-700 rounded-md mx-2">
            {label}
        </button>
    )
}