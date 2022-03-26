import React from 'react';
console.log("React is", React)
class Greeter extends React.Component {
    render() {
        console.log("props", this.props)
        return (
            // empty tag, parent element
           <>
            <h2>Hello Again! {this.props.name} </h2>
            <p>I am {this.props.age} years old.</p>
            </>
        ) 
    }
}

export default Greeter;