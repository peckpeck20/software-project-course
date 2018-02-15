import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
//import Table from './components/Table';





class App extends Component {

  constructor(){
    super();

    this.state={
      data:[],
    }
  }


  componentDidMount(){
    const urlPath = 'http://localhost/api/people';

    axios.get(urlPath)
      .then(response => {
        //console.table(response.data);
        this.setState({
          data: response.data
        })
      })
      .catch(error =>{
        console.log(error)
      });    
 }

//  <TableBody displayRowCheckbox={false}>
//   {this.state.todos.map((item, index) =>
//     <TableRow key={index}><TableRowColumn>{item.date}</TableRowColumn><TableRo
//       wColumn>{item.description}</TableRowColumn></TableRow>)}
// </TableBody>
    


  render() {
    const TableExampleSimple = () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody >
          
          {/* <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow> */}
        </TableBody>
      </Table>
    );

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <RaisedButton label='hola'/>
          <TableExampleSimple/>
        </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
