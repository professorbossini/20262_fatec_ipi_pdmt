import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const pedidos = [
  {
    data: "22/04/2026",
    icone: "fa-solid fa-hdd",
    titulo: "SSD",
    descricao: "SSD Kingston 400"
  },
  {
    data: "23/07/2026",
    icone: "fa-solid fa-book",
    titulo: "Livro",
    descricao: "Concrete Maths"
  },
  {
    data: "23/06/2026",
    icone: "fa-solid fa-dog",
    titulo: "Cachorro",
    descricao: "Filhote de cachorro"
  },
  {
    data: "24/06/2026",
    icone: "fa-solid fa-glasses",
    titulo: "Óculos",
    descricao: "Óculos escuros"
  }
]
const App = () => {
  const converterParaData = (stringData) => {
    const [dia, mes, ano] = stringData.split("/")
    return new Date(ano, mes - 1, dia)
  }
  pedidos.sort((p1, p2) => converterParaData(p1.data) - converterParaData(p2.data))
  const textoOK = "Já chegou"
  const textoNOK = "Não chegou ainda"
  const funcaoOK = () => alert("Agradecemos a confirmação")
  const funcaoNOK = () => alert("Verificaremos o ocorrido")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
  <div className="container border rounded mt-2">

    <div className="row">
      <div className="col-12">
        <i className="fa-solid fa-hippo fa-3x"></i>
        <i className="fa-solid fa-hippo fa-2x fa-flip-horizontal ms-2" style={{color: 'pink'}}></i>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
    </div>

    <div className="row">
      {/* mobile first */}
      {
        pedidos.map((pedido, indice) => (
        <div key={indice} className="col-12 col-md-6 col-xl-3">
          <div className="mb-3">
            <Cartao
              cabecalho={pedido.data}>
              <Pedido 
                icone={pedido.icone}
                titulo={pedido.titulo}
                descricao={pedido.descricao}
              />
              {componenteFeedback}     
            </Cartao>
          </div>
        </div>
        ))
      }
    </div>
  </div>
  )  
}

export default App