export const Hours = () => {

    const data = new Date(); 
    const horas = data.getHours();
    const minutos = data.getMinutes();
    
    return (
        <div className="text-white text-9xl  text-center">
            <div>
                {horas}:{minutos}
            </div>
            <div className="text-5xl font-bold">
                {horas >= 0 && horas < 5 && 'Boa madrugada' + String.fromCodePoint(0x1F4A4)}
                {horas >= 5 && horas < 12 && 'Bom dia' + String.fromCodePoint(0x1F305)}
                {horas >= 12 && horas < 18 && 'Boa tarde' + String.fromCodePoint(0x1F307)}
                {horas >= 18 && 'Boa noite' + String.fromCodePoint(0x1F303)}
            </div>
        </div>
    )
}
