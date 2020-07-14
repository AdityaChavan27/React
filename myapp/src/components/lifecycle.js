import React , {Component} from "react";
class Lifecycle extends Component
{
constructor()
{
super()
this.state={
color:"red"

};

}

//static getDerivedStateFromProps(props,state)
//
//{
//return{
//
//color: props.favcolor
//}
//
//}


//componentDidMount(){
//setTimeout(()=> {
//this.setState({color:"blue"});
//},1000);
//
//}


changecolor()
{

this.setState(
{
color:"purple"
}
);
};

shouldComponentUpdate()

{
return true;
}



render()
{
return(
<div>
<h1> The color is {this.state.color} </h1>

<button onClick={()=>this.changecolor()}> Change Color </button>
</div>

);

}

}


export default Lifecycle;