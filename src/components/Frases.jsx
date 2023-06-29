

const Frases = ({data}) => {

return(
 <article>
      <h1 className="title">TU GALLETA DE LA FORTUNA</h1>
      <div className="fondo">
       <span className="texto">{data.phrase}</span>
    </div>
    
 </article>
    )
}

export default Frases