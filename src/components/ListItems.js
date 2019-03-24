import React, {Component} from 'react';
import SingleListItem from './SingleListItem';

class ListItems extends Component {
    
    
    render(){
        return(
            <ul>
               <SingleListItem myList={this.props.myList} onChange={this.props.onChange} onClick={this.props.onClick}/>
            </ul>);
        
    }
} 
// function ListItems(props){
//     return <ul>
//         <SingleListItem myList={this.myList}/>
//     </ul>
// }
export default ListItems;