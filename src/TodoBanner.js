import  React, {component} from 'react';
export class TodoBanner extends component{

render=()=>

<h4 className="bg-primary text-center p-2">

{this.props.name} Todo list
({this.props.task.filter(t=> !t.done).length}item to do )


</h4>









}