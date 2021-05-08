import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.age
        }
        }
        render() {
            return (<div>
                <h1>{this.props.lname},{this.props.fname}</h1>
                <p> Age:{this.state.count}</p>
                <p>Hair color: {this.props.hcolor}</p>
                <button onClick={ this.birthday }>{this.props.fname} Birthday Button</button>
                
            </div>)
        }
        birthday = () => this.setState({count: this.state.count+1})
    }


export default PersonCard;