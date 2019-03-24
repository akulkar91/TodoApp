import React, { Component } from 'react';

class TaskField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
        
    }
    addNewTodo(v){
        this.props.addNewTodo(v);
        this.setState({value:''})
    }
    render() {
        return (
            <div className="input-box row">
                <div className="col-md-8">
                    <input type="text" className="form-control" value={this.state.value} onChange={(e) => {this.setState({value:(e.target.value)})}} />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary btn-block" onClick={() => this.addNewTodo(this.state.value)}>Add Todo</button>
                </div>
            </div>
        );
    }
}
export default TaskField;