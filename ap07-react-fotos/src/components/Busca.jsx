// rcc
import React, { Component } from 'react'
import { Button } from '@primereact/ui/button'
import { IconField } from '@primereact/ui/iconfield'
import { InputText } from '@primereact/ui/inputtext'
import  { Search } from '@primeicons/react/search'

export default class Busca extends Component {

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    console.log(evento.target.value)
    //antes de mais nada, transformar o texto para que seja escrito somente maiúsculas
    //pegar o texto resultante e guardar na variável termoDeBusca
    this.setState({termoDeBusca: evento.target.value})
  }


  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField.Root>
            <IconField.Inset>
              <Search />
            </IconField.Inset>
            <InputText
              //substituir o que existe em value pelo que existe em termoDeBusca
              value={this.state.termoDeBusca}
              pt-root-onChange={this.onTermoAlterado} 
              className="w-full"
              placeholder={this.props.dica}/>
          </IconField.Root>
          <Button 
            className="mt-3">
            OK
          </Button>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: "Digite algo que deseja ver..."
}