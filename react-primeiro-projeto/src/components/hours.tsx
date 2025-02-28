export const Hours = () => {

    const data = new Date(); 
    const horas = data.getHours();
    const minutos = data.getMinutes();

    


    return (
        <div className="text-white text-9xl font-bold">
            {horas}:{minutos}
        
        </div>
    )
}
