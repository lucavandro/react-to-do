import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      lista: [
        { 
          testo: "Rubare i soldi a Benito", 
          completato: true
        },
        { 
          testo: "Comprare VPN", 
          completato: false
        }
      ]
    }
  }

  segnaCompletato = (indice)=>{
    const nuovaLista = [...this.state.lista]
    nuovaLista[indice].completato = !nuovaLista[indice].completato;
    this.setState({
      lista: nuovaLista
    })
  }
  aggiungiCompito = (compito)=>{
    const nuovoCompito = {
      testo: compito,
      completato: false
    }
    const nuovaLista = [...this.state.lista, nuovoCompito]
    this.setState({
      lista: nuovaLista
    })
  }

  elimina = (index)=>{
    const nuovaLista = [...this.state.lista]
    nuovaLista.splice(index, 1)
    this.setState({
      lista: nuovaLista
    })
  }

  lunghezza=()=>{
    let l = this.state.lista.length
    if(l==0){
      l=""
    }
    return l
  }
  render() {

    return (
      <div className="App">
        <h1>Lista delle cose da fare {
          this.state.lista.length ? "(" + this.state.lista.length + ")" : ""
          }</h1>
        <CreateTodo azione={this.aggiungiCompito}></CreateTodo>
        <ol>
          {
            this.state.lista.map(
              (elemento, indice)=><TodoItem 
                                    key={indice} 
                                    indice={indice} 
                                    completa={this.segnaCompletato}
                                    compitoElimina={this.elimina}
                                    elemento={elemento}></TodoItem>
            )
          }
        </ol>
      </div>
    );
  }
}



export default App;
