import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHeaderColumn,
//   TableRow,
//   TableRowColumn
// } from 'material-ui/Table';
import TableExampleSimple from './components/Table';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
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


  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Maria DB data</h1>
          </header>
          <TableExampleSimple data={this.state.data}/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
