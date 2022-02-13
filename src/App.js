import React, {Component} from 'react'

class App extends Component {
  mensagem = (x) => {
    return "Olá!"
        }
  
  calculator = (x) => {
    return x * 2
        }
  
  render(){
    return(
      <main>
        <h1>{this.mensagem()}</h1>
        <h2>Retornando o dobro do número:</h2>
        {this.calculator(20)}
      </main>
    )
  }
}

export default App
