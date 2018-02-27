import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default class TableExampleSimple extends Component {

//   componentWillReceiveProps(nextProps) {
//     if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) // Check if it's a new user, you can also use some unique, like the ID
//     {
//            this.updateUser();
//     }
// } 

  render() {
    return (
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
            .props
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
    )
  }
};
