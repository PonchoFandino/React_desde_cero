import React, { Component } from 'react';
import Task from '../Compartido/tasks';
import Style from '../Compartido/Estilo';
import { addTaskAtn } from '../Compartido/acciones';
import store from '../Compartido/store';




class AddTareas extends Component {
    constructor() {
        super ();
        const task = new Task(0, '');
        this.state = {
            task: task,
            isValidate: false,
        };
    }
    componentWillMount(){
        store.subscribe(() =>{
            this.setState({
                isValidate: store.getState().isValidate,
            });
        });
    }    
    updateInput(event) {
        if(event) {
            this.state.task.task = event.target.value;
            if(event.target.value.length > 5)
            {
                this.state.isValidate = true;
            } else {
                this.state.isValidate = false;
            }

        } else {
            this.state.task.task = '';
        }
        this.setState({
            task: Object.assign({}, this.state.task),
        });
    }
    addTask(){
        if(this.state.task.task.length > 0) {
            store.dispatch(addTaskAtn(this.state.task));
            this.updateInput(null);
        }
   
    }
    render () {
        return (
            <div>
                <label style={Style.label}>Nueva Tarea</label>
                <input style={Style.input} type="text" value={this.state.task.task} onChange={this.updateInput.bind(this)}></input>
                { this.state.isValidate?'': <label className="aab-invalid">Ingresa tu tarea</label>}
               
                <button disabled={!this.state.isValidate} style={Style.button3} className="buttonChange" onClick={() => this.addTask()}>Agregar Tarea</button>
          
            </div> 
                 
        );
    }
} export default AddTareas;