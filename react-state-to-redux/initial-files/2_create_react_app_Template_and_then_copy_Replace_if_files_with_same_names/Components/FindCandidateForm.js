import React from 'react';
import {DYNAMIC_WEB_SERVICE_API_SERVER_URL} from '../CONSTANTS/Constants';
import CandidateListItem from './CandidateListItem';

export default class FindCandidateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state= { searchedCandidate: {firstName:"",
                                      lastName:""},

                  foundCandidate: {firstName:"",
                                   lastName:"",
                                   votes:"",
                                   imageFileName:""}  };
  }

  setupAndCallAjaxPOST = (that, newCandidate) => {
    fetch(DYNAMIC_WEB_SERVICE_API_SERVER_URL+"/findCandidate", {
      method:'POST',
      headers: {'Accept':'application/json','Content-Type':'application/json'},
      body: JSON.stringify(newCandidate)
    })
    .then( (Response) => Response.json())
    .then( (jsObj) => {
      // console.dir(jsObj);
      that.setState({foundCandidate:jsObj});
    })
    .catch(function(err) {
      console.log("Failure - " + err);
    });
  };

  inputChanged = (event) => {
    this.setState({searchedCandidate: {...this.state.searchedCandidate,
      [event.target.name] : event.target.value}});
    };

    formSubmitted = (event) => {
      event.preventDefault();  // ignores the default action
      console.log("Id:" + event.target.id);
      const newC = {...this.state.searchedCandidate};

      console.dir(newC);

      if(newC.firstName || true) {
        this.setupAndCallAjaxPOST(this,newC);
        this.setState({searchedCandidate: {firstName:"",
        lastName:""}});
      } else {
        console.log("Error: Add form has wrong or missing data!");
      }
    };

    render = () =>
    <div>
      <h2>Find a candidate from back-end with first name and/or last name
          (This component has its own State)</h2>

      <form onSubmit={this.formSubmitted} id="findCandidateForm">
        <span>Searched first name: </span>
        <input type="text" name="firstName" onChange={this.inputChanged}
               value={this.state.searchedCandidate.firstName} /><br />

        <span>and/or last name:  </span>
        <input type="text" name="lastName" onChange={this.inputChanged}
               value={this.state.searchedCandidate.lastName} /><br />

        <br /><input type="submit" value="Find candidate from back-end" />
      </form>

      <h3>The found candidate (Result from back-end):</h3>
      { this.state.foundCandidate.firstName
           &&
        <table>
          <tbody>
            <CandidateListItem key={0}
                      firstName={this.state.foundCandidate.firstName}
                      lastName={this.state.foundCandidate.lastName}
                      votes={this.state.foundCandidate.votes}
                      imageFileName={this.state.foundCandidate.imageFileName} />
          </tbody>
        </table>
      }

    </div>
  };
