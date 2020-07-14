import React, {Component} from "react";

class Classclick extends Component{

clickhandler(){
console.log("clicked from class component");

}

render(){

return(
<div>

<button onClick={this.clickhandler}> click me </button>

</div>


);
}
}

export default Classclick;