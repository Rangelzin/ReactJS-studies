const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-br', {weekday: 'long'}).format(new Date());
}


export const Person = () => {
    const name: string = "Elon Musk"
    const avatar: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/270px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"


    return (
        <>
            <h1>{name} - {getWeekday()}</h1>
            <img 
                src={avatar}
                alt={name}
                className=" h-40"
            />
            <ul>
                <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li>
                <li>CEO do X</li>
            </ul>
        </>
    );
}