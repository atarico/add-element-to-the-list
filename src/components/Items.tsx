export const Items = (
    { text, handleClick }:
        { text: string, handleClick: () => void }) => {
    return (
        <li>
            {text}
            <button onClick={handleClick}>
                ❌
            </button>
        </li>
    )
}
