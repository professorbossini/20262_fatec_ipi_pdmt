// rafce
const Imagem = ({ src, alt, imgStyle }) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
      <img
        className="border-round" 
        src={src} 
        alt={alt}/>
    </div>
  )
}

export default Imagem