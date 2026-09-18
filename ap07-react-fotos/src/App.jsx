import React from 'react'
import Busca from "./components/Busca"
import { createClient } from 'pexels'

export default class App extends React.Component {

  pexelsClient = null

  state = {
    photos: []
  }

  componentDidMount(){
    this.pexelsClient = createClient('')
  }

  onBuscaRealizada = (termoDeBusca) => {
    this.pexelsClient.photos.search({
      query: termoDeBusca
    })
    .then((result) => this.setState({photos: result.photos}))
  }
  render(){
    return (
      <div className="grid justify-content-center w-9 m-auto">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}
