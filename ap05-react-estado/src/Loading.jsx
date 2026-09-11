import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center border rounded p-3'>
        {/* wai aria */}
        <div 
          className="spinner-border text-primary" 
          style={{width: '3rem', height: '3rem'}}
          role='status'>
          <span className='visually-hidden'>Carregando...</span>
        </div>
        <p className="mt-2 text-primary">{this.props.mensagem}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
  mensagem: "Carregando..."
}
