//criar um componente funcional
//ele deve receber uma lista como parâmetro chamada photos e já desestruturar na lista de parâmetros da função que o define
//chamar a função map sobre essa lista e, para cada item, produzir um componente do tipo Imagem, que é esse que a gente acabou de criar
import Imagem from './Imagem'

const ListaImagens = ({photos}) => {
  return (
    photos.map((photo, key) => (
      <Imagem src={photo.src.small} alt={photo.alt}/>
    ))
  )
}

export default ListaImagens