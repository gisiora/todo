import  React, {component} from 'react';
export class TodoCreater extends component{

constructor(props){

super(props);
this.state={ newItemText :""}

}

UpadateNweTextValue=(event)=>{
this.setState({newItemText: event>EventTarget.value});
 
}
createNewTodo=()=>
{

    this.props.callback(this.state.newItemText)
    this.setState({newItemText:""});
}

render=()=>
<div className="my-1">
    <input className="form-control" value={this.state.newItemText}
    onChange={this.UpadateNweTextValue} />

<button className="btn btn-primary mt-1" 
onClick={this.createNewTodo}>

Add Todo Task

</button>




</div>

}
