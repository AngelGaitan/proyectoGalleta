

const Frases = ({data}) => {

return(
 <article>
      <h1>TU GALLETA DE LA FORTUNA</h1>
      <div className="fondo">
       <span className="texto">{data.phrase}</span>
    </div>
    
 </article>
    )
}

export default Frases