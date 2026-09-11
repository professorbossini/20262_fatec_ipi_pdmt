// rcc
import React, { Component } from 'react'
export default class EstacaoClimatica extends Component {
  
  state = {
    data: null
  }
  
  timer = null

  componentDidMount(){
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.setState({
        data: new Date().toLocaleTimeString()
      })
      console.log('Disparou o timer...')
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }


  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div
            style={{ height: '6rem' }}
            className="d-flex align-items-center border rounded mb-2">
            <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">
              {this.props.estacao}
            </p>
          </div>
          <div>
            <p className="text-center">
              {
                this.props.latitude ?
                  `Coordenadas: ${this.props.latitude},${this.props.longitude}. Data: ${this.state.data}.`
                :
                  `Clique no botão para saber a sua estação climática`
              }
            </p>
          </div>
          <button
            className='btn btn-outline-primary w-100 mt-2'
            onClick={this.props.obterLocalizacao}>
            Qual a minha estação?
          </button>
          <button
            onClick={() => this.props.raiz.unmount()}
            className="btn btn-outline-danger w-100 mt-2">
            Testando componentWillUnmount
          </button>
        </div>
      </div>
    )
  }
}
