import React from 'react'

class TodoItem extends React.Component{
    constructor(){
        super()
    }
    cancella = ()=>{
        const risposta = window.confirm("Sei sicuro?")
        if(risposta === true){
            this.props.compitoElimina(this.props.indice)
        }
    }

    completa = ()=>{
        this.props.completa(this.props.indice)
    }
    render(){
        return(
            <li><span 
            onClick={this.completa}
            style={{textDecoration: this.props.elemento.completato ? "line-through": "" }}>{this.props.elemento.testo}</span> <span onClick={this.cancella}>💩</span></li>
        );
    }
}

export default TodoItem;
