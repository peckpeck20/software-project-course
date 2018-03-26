import React from 'react';
import {DYNAMIC_WEB_SERVICE_API_SERVER_URL} from '../CONSTANTS/Constants';

const styles = {
  votesStyle: {
    width: "105px",
  }
};

export default class AddCandidateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state= { stateCandidate: { firstName:"",
                                    lastName:"",
                                    votes:"",
                                    imageFileName:"" }  };
  }

  setupAndCallAjaxPOST = (that, newCandidate) => {
    fetch(DYNAMIC_WEB_SERVICE_API_SERVER_URL+"/addCandidate", {
       method:'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify(newCandidate)
     })
    .then( (Response) => Response.json())
    .then( (jsObj) => {
      // console.dir(jsObj);   // TEST !!!
      // what to do with successful response, maybe nothing.
      // Maybe showing notification
    })
    .catch(function(err) {
      console.log("Failure - " + err);
    });
  };

  inputChanged = (event) => {
    this.setState({stateCandidate: {...this.state.stateCandidate,
                    [event.target.name] : event.target.value}});
    /*   e.g.
        this.setState({stateCandidate: {...this.state.stateCandidate,
                        firstName : "Joe"}});
    */
  };

  formSubmitted = (event) => {
    event.preventDefault();  // ignores the default action
    //console.log("Id:" + event.target.id);   // TEST!!!
    const newC = {...this.state.stateCandidate};

    //console.dir(newC);   // TEST!!!

    if(newC.firstName && newC.lastName
         && newC.votes && !isNaN(newC.votes) && newC.imageFileName) {
           this.setupAndCallAjaxPOST(this,newC);
           this.setState({stateCandidate: {firstName:"",
                                        lastName:"",
                                        votes:"",
                                        imageFileName:""}});
    } else {
      console.log("Error: Add form has wrong or missing data!");
    }
  };

  render = () =>
  (
    <form onSubmit={this.formSubmitted} id="addCandidateForm">
      <h2>Adding a new candidate to the back-end
          (This component has its own State)</h2>

      <span>First name: </span>
      <input type="text" name="firstName" onChange={this.inputChanged}
        value={this.state.stateCandidate.firstName} /><br />

     <span>Last name:  </span>
     <input type="text" name="lastName" onChange={this.inputChanged}
        value={this.state.stateCandidate.lastName} /><br />

     <span>Votes:      </span>
     <input type="text" name="votes" onChange={this.inputChanged}
       style={styles.votesStyle}
       value={this.state.stateCandidate.votes} /><br />

     <span>Image file: </span>
     <input type="text" name="imageFileName" onChange={this.inputChanged}
       value={this.state.stateCandidate.imageFileName} /><br />
     <span>(Use portrait001.jpg to portrait010.jpg)</span><br />


      <br /><input type="submit" value="Add candidate to back-end" />
    </form>
  )
}
