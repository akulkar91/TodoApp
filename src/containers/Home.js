import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import TaskField from '../components/TaskField';
import ListItems from '../components/ListItems';
// import SingleListItem from './components/SingleListItem';

class App extends Component {
  state = {
    myList: [
      { label: "Why use constructor?", status: false },
      { label: "What happens if we don't use a constructor", status: false },
      { label: "How to send entire props to child component", status: false },
      { label: "How to make ListItem a fn component", status: false },
      { label: "Why am i getting singleListItem component ? How good was the code out of 10?", status: false }
    ]
  };
  addNewTodo = (value) => {
    console.log(value);
    {let text = {label: value, status: false}
    let myList = this.state.myList;
    myList.push(text);
    this.setState({
      myList: myList
    })}

  };
  deleteBtnHandler = (e) => {
        console.log(e.target.value);
        let myList = this.state.myList;
        delete myList[e.target.value]
        this.setState({
          myList : myList
        })
  }
  render() {
    return (
      <div className="container App">
        <h1>My Todo List</h1>
        <h4>Ask questions before the class starts</h4>
        <hr />
        <TaskField addNewTodo={this.addNewTodo} />
        <div className="taskItems">
          <ListItems myList={this.state.myList} onChange={this.toggleStatus} onClick={this.deleteBtnHandler}>

          </ListItems>
        </div>

      </div>
    );
  }
}

export default App;
