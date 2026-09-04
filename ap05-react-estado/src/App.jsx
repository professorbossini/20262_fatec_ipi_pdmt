import React from 'react'
import EstacaoClimatica from './EstacaoClimatica'
class App extends React.Component {
 
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount(){
    this.obterLocalizacao()
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
  }


  render(){
    return (
      <div className='container border mt-2 py-3'>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <EstacaoClimatica />
          </div>
        </div>
      </div>
    )
  }
  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const sul = latitude < 0
    if(data >= d1 && data < d2)
      return sul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return sul ? 'Primavera' : 'Outono'
    if(data >= d3 || data < d4)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Primavera': 'fa-seedling',
    'Verão': 'fa-umbrella-beach',
    'Outono': 'fa-tree',
    'Inverno': 'fa-snowman'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = new Date()
        const estacao = this.obterEstacao(data, position.coords.latitude)
        const icone = this.icones[estacao]
        // this.state.estacao = estacao
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone
        })

      }, 
      (erro) => {
        console.log(`Erro: ${erro}`)
        //quero atualizar a variável de mensagem de erro com "Tente novamente mais tarde"
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }
}
export default App
