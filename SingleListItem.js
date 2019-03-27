import React, {Component} from 'react';

class SingleListItem extends Component{
    state = {

    }
    toggleStatus = (e) => {
        let myList = this.props.myList;
        let targetValue = e.target.value; //this is why the value in the input has been set to index so we can read the index from it
        myList[targetValue].status = !myList[targetValue].status;
        this.setState({myList : myList})
      };
      
    render(){
        return (this.props.myList.map((l, index) => { 
                return (<li key={`${index}_li`} >
                    <input type="checkbox" value={index} checked={l.status} onChange={this.toggleStatus}/>
                    <label className = {(this.props.myList[index].status ? "done" : ' ')}>{l.label}</label>
                    <button className="glyphicon glyphicon-trash pull-right" value={index} onClick={this.props.onClick}/>
                </li>)
                }));
    }
}
export default SingleListItem;