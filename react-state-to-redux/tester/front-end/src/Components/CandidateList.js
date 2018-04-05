import React, { Component } from "react";
import CandidateListItem from "./CandidateListItem"; // Child component
// import { DYNAMIC_WEB_SERVICE_API_SERVER_URL } from "../CONSTANTS/Constants";
import { connect } from "react-redux";
//import Candidate from '../EntityObjects/Candidate';

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//import Fetch_API from 'jquery';

//takes state from Store and sets it as props
const mapStateToProps = state => {
  return {candidates: state.users};
};

class CandidateList extends Component {
  // constructor(props) {
  //   super(props);

  //   // if you'll see only 2 candidates, then check your back-end and the
  //   // constants that tell where the back-end is:
  //   // this.state = {candidates:[{"firstName":"Zoran","lastName":"Sakic",
  //   //                           "votes":13,"imageFileName":"portrait010.jpg"}
  //   //                           ,{"firstName":"Aapeli","lastName":"Joki",
  //   //                           "votes":22,"imageFileName":"portrait006.jpg"}]
  //   // };
  // }

  // componentDidMount() {
  //   setTimeout(this.doAfterDelay(this), 3000);
  // }

  // // doAfterDelay(that) {
  // //   this.timer = setInterval(() => this.setupAndCallAjaxGET(that), 3000);
  // // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  renderCandidate = (candidate, index) => (
    <CandidateListItem
      key={index}
      firstName={candidate.firstName}
      lastName={candidate.lastName}
      votes={candidate.votes}
      imageFileName={candidate.imageFileName}
    />
  );

  renderCandidates = () => (
    <table id="candidateListDiv">
      <tbody>{[...this.props.candidates].map(this.renderCandidate)}</tbody>
    </table>
  );

  render() {
    //console.dir(this.state.candidates);
    //console.log((new Candidate("Joe","Arpaio",12,"joo.jpg")).toString());
    return (
      <div>
        {this.renderCandidates()}

        {/* <hr />
          <AddCandidateForm />

          <hr />
          <ResetCandidateList />

          <hr />
          <FindCandidateForm /> */}
      </div>
    );
  }

  // setupAndCallAjaxGET = (that) => {
  //   fetch(DYNAMIC_WEB_SERVICE_API_SERVER_URL+"/candidates")
  //   .then( (Response) => Response.json() )
  //   .then( (jsArrayObject) => {
  //     var newState = {candidates: jsArrayObject};
  //     that.setState(newState);
  //   })
  //   .catch(function(err) {
  //     console.log("Failure - " + err);
  //   });
  // };
}

export default connect(mapStateToProps)(CandidateList);
