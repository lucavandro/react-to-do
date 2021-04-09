import React from 'react';

class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            testo: ""
        }
    }
    aggiornaTesto = (e)=>{
        this.setState({
            testo: e.target.value
        })
    }

    svolgiCompito = (evento)=>{
        evento.preventDefault();
        if(this.state.testo.trim() !== ""){
            this.props.azione(this.state.testo)
            this.setState({
                testo: ""
            })
        }
        
    }

    render() {
        return (
            <form onSubmit={this.svolgiCompito}>
                <input 
                    type="text"
                    onChange={this.aggiornaTesto} 
                    placeholder="Aggiungi un compito" 
                    value={this.state.testo} />
            </form>
        );
    }
}

export default CreateTodo;