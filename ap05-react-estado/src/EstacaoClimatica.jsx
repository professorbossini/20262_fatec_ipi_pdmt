// rcc
import React, { Component } from 'react'
export default class EstacaoClimatica extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div
            style={{ height: '6rem' }}
            className="d-flex align-items-center border rounded mb-2">
            <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">
              {this.state.estacao}
            </p>
          </div>
          <div>
            <p className="text-center">
              {
                this.state.latitude ?
                  `Coordenadas: ${this.state.latitude},${this.state.longitude}. Data: ${this.state.data}.`
                  :
                  this.state.mensagemDeErro ?
                    `Tente novamente mais tarde`
                    :
                    `Clique no botão para saber a sua estação climática`
              }
            </p>
          </div>
          <button
            className='btn btn-outline-primary w-100 mt-2'
            onClick={this.obterLocalizacao}>
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
