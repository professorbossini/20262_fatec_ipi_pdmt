import React from 'react'
import Busca from "./components/Busca"
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from './utils/pexelsClient'

export default class App extends React.Component {

  // pexelsClient = null

  state = {
    photos: []
  }

  componentDidMount(){
    //this.pexelsClient = createClient('')
  }

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca
  //   })
  //   .then((result) => this.setState({photos: result.photos}))
  // }

  onBuscaRealizada = (termoDeBusca) => {
    pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    })
    .then((result) => {
      this.setState({photos: result.data.photos})
    })
  } 




  render(){
    return (
      <div className="grid justify-content-center w-9 m-auto">
        <div className='col-12'>
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <ListaImagens photos={this.state.photos}/>
        </div>
      </div>
    )
  }
}
