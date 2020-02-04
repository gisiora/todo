import  React, {component} from 'react';
export class visibillityControl extends component{

render=()=>
<div className="formcheck">
<input className="form-check-input" type="checkbox"
checked={this.props.isChecked}
onChange={(e)=>this.props.callback(e.target.checked)} />


<label className="form-check-label">
    show {this.props.description}
</label>




</div>
}
