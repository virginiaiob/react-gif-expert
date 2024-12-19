
export const GifItem =  ({ title, url, id }) => {
    //el componente hereda todas las caracteristicas de donde es usado

    return (
        <div className="card">
            <img src= { url } alt={ title } />
            <p>{ title }</p>
        </div>
        
 
    )
}