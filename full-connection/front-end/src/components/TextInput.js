//will be used in Redux

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButtons   from './SendButton';
import axios from 'axios';


export default class TextFieldComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName : '',
        };

    //needed to use THIS inside function
    this.onClickPost= this.onClickPost.bind(this);
    this.clearState = this.clearState.bind(this);

    }

    handleChangeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    };

    handleChangeLastName = (event) => {
        this.setState({lastName: event.target.value});
    };

    onClickPost(){
        axios.post('http://localhost/api/people', {
            firstName: this.state.firstName,
            lastName: this.state.lastName
          })
          .then(this.clearState())
          .catch(function (error) {
            console.log(`fail : ${error}`);
          });
    }

    clearState(){
        this.setState({
            firstName: '',
            lastName : '',
        })
    }
//(firstName)=>{this.setState({firstName:firstName})}
    render() {
        return (
            <div>
                <TextField
                    id="text-firstName"
                    hintText="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChangeFirstName}/>
                <TextField
                    id="text-lastName"
                    hintText="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChangeLastName}/>
                <button onClick={this.onClickPost}>Send</button>
                <button onClick={this.clearState}>clear</button>
            </div>
        );
    }
}