import React,{Component} from "react";

class Count extends Component{

constructor(){
super();

this.state={
count:0,
};

}

increment()
{
this.setState(
{
count:this.state.count+1

}

);

}


render(){
return(
<div>

<div>

<h1> Count - {this.state.count}  </h1>


</div>

<button onClick={()=>this.increment()}> Increment </button>
</div>


);

}

}

export default Count;