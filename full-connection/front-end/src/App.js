import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
//will be used with Redux
 //import TableExampleSimple from './components/Table';
// import TextFieldComponent   from './components/TextInput';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      firstName: '',
      lastName : '',
    }
    //needed to use THIS inside function
    this.onClickPost = this
      .onClickPost
      .bind(this);
    this.clearState = this
      .clearState
      .bind(this);
    this.fetchData = this
      .fetchData
      .bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    const urlPath = 'http://localhost/api/people';

    axios
      .get(urlPath)
      .then(response => {
        //console.table(response.data);
        this.setState({data: response.data})
      })
      .catch(error => {
        console.log(error)
      });
  }

  handleChangeFirstName = (event) => {
    this.setState({firstName: event.target.value});
};

handleChangeLastName = (event) => {
    this.setState({lastName: event.target.value});
};

onClickPost(event){
  //fixes fetch data
    event.preventDefault();
    axios.post('http://localhost/api/people', {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(
        this.fetchData,
        console.log('Post successfull'),
        this.clearState()
        
    )
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


  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Maria DB data</h1>
          </header>
          < TextField
          id = "text-firstName"
          hintText = "First Name"
          value = {
            this.state.firstName
          }
          onChange = {
            this.handleChangeFirstName
          } /> <TextField
            id="text-lastName"
            hintText="Last Name"
            value={this.state.lastName}
            onChange={this.handleChangeLastName}/>
                <button onClick={this.onClickPost}>Send</button>
                <button onClick={this.clearState}>clear</button>
                <button onClick={this.fetchData}>fetch</button>
                <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>First Name</TableHeaderColumn>
                <TableHeaderColumn>Last Name</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this
                .state
                .data
                .map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableRowColumn>{n.id}</TableRowColumn>
                      <TableRowColumn>{n.firstName}</TableRowColumn>
                      <TableRowColumn>{n.lastName}</TableRowColumn>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
