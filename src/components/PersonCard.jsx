import React, { Component } from 'react';
    



class PersonCard extends Component {
        constructor(props){
            super(props);
            console.log(this.props);
            this.state={
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                age:this.props.age,
                hairColor:this.props.hairColor
            }
        }





    increaseNum=()=>{
        console.log('clicked');
        this.setState({
            age:this.state.age + 1
        }, () => console.log(this.state.age))
    }

    render() {
        return <div>
    <h1>{this.state.lastName}, {this.state.firstName}</h1>
    <p>age: {this.state.age}</p>
    <p>Hair Color: {this.state.hairColor}</p>
    <button onClick={() => this.increaseNum()}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>



</div>;
    }
}
    
export default PersonCard;