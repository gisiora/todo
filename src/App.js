import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import {TodoBanner} from "./TodoBanner";
import {TodoCreater} from "./TodoCreater";
import {TodoRow} from "./TodoRow";
import  {visibillityControl} from "./visibillityControl";



export default class App extends Component{
  constructor(props){
        super(props);
        this.state={
          userName : "james",
          todoItems :[{
            action:"buy a flower.", done:false
          },{
            action:"Do Workout", done:true
          },{
            action:"study programming", done:false
          },{
            action:"call a friend", done:false
          }],
          showCompleted :true
         // newItemText :""
        }

  }

updateNewTextValue=(event) =>{
this.setState({newItemText: event.target.value});

}
createNewTodo=(Task)=>
{
if(!this.state.todoItems
        .find(item=>item.action===task))
{
this.setState ({
  todoItems :[...this.state.todoItems,
          {action : task,
        done:false    }]
},
()=> localStorage.setItem("todos",
             JSON.stringify(this.state)));
       // newItemText:""



}

}


  
 
  toggleTodo =(todo)=>this.setState({
    todoItems :this.state.todoItems.map(item =>item.action ===todo.action ?
      {...item,done:!item.done}:item)  } );

      todoTableRows =(doneValue )=> this.state.todoItems
      .filter(item=>item.done===doneValue)
      .map
      (item=>
        <TodoRow key={item.action}
        item={item}
        callback={this.toggleTodo}
      /> )  

//load /get the kept Data
componentDidMount=()=>
{

let data =localStorage.getItem("todos")
this.setState(data!=null ? JSON.parse(data):

{


  userName : "james",
  todoItems :[{
    action:"buy a flower.", done:false
  },{
    action:"Do Workout", done:true
  },{
    action:"study programming", done:false
  },{
    action:"call a friend", done:false
  }],
  showCompleted :true 


});



}






render(){
  return(
<div>

  
    <TodoBanner name={this.state.userName}
                task={this.state.todoItems} />
    <div className="container fluid">
      
      
<TodoCreater callback={this.createNewTodo}/>
<table className="table table-striped table-bordered">
<thead>
<tr>
<th>
Todo Task Name</th>
<th>Done</th>
</tr>
</thead>
<tbody>
{this.todoTableRows(false)}

</tbody>



</table>
<div className="bg-danger text-white text-center p-2">


{/**  calling child component */}
<visibillityControl description="completed task"
isChecked={this.state.showCompleted}
callback={(checked)=> this.setState({showCompleted: checked})}/>

</div>
{this.state.showCompleted&&
<table className="table table-striped table-bordered">
  
  <thead>
<tr>
  <th>Task Name</th><th>Status</th>
</tr>
  </thead>
  <tbody>
  {this.todoTableRows(true)}


  </tbody>
  
  </table>}




 </div> 
</div>
  )
};


}
