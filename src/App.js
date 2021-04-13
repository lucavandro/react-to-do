import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      ordinata: false,
      lista: []
    }
  }

  componentDidMount(){
    let stato = localStorage.getItem('stato')
    if(stato !== 'undefined'){
      this.setState(JSON.parse(stato))
    }    
  }

  componentDidUpdate(){
    if(this.state)
     localStorage.setItem('stato', JSON.stringify(this.state))
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

  setordinata = (e)=>{
    this.setState({
      ordinata: !this.state.ordinata
    })
  }
  render() {
    const lista = this.state.lista.map(
      (elemento, indice)=><TodoItem 
                            key={indice} 
                            indice={indice} 
                            completa={this.segnaCompletato}
                            compitoElimina={this.elimina}
                            elemento={elemento}></TodoItem>
    );
    return (
      <div className="App">
        <h1>Lista delle cose da fare {
          this.state.lista.length ? "(" + this.state.lista.length + ")" : ""
          }</h1>
        <CreateTodo azione={this.aggiungiCompito}></CreateTodo>
        <p>Completati: {this.state.lista.filter((e)=>e.completato).length}</p>
        <p>Da completare: {this.state.lista.filter((e)=>!e.completato).length}</p>
        <label htmlFor="ordinata">
          <input type="checkbox" 
              onChange={this.setordinata} 
              name="ordinata" 
              id="ordinata" 
              value={this.state.ordinata}/>
          Lista ordinata
        </label>
        
        { this.state.ordinata? (<ol>{lista}</ol>):(<ul>{lista}</ul>) }
      </div>
    );
  }
}



export default App;
