import React,{Component} from "react";
class Message extends Component{

constructor()

{
super();
this.state={
message:"Aditya"

}

}


changemessage()

{
this.setState(
{
message:"thanks for subscribing"

}


);

}


render(){

return (

<div>
<h1> Welcome {this.state.message} </h1>
<button onClick={() =>this.changemessage()}> Subscribe </button>

</div>


);
}
}

export default Message;