import React from 'react';
import { connect } from "react-redux";
import {fullReset} from '../actions/actionTypes'
// import {DYNAMIC_WEB_SERVICE_API_SERVER_URL} from '../CONSTANTS/Constants';


const mapDispatchToProps = dispatch => ({
  resetCandidateList: () => dispatch(fullReset()),
})

const mapStateToProps = currentState => {
  return {}
}

class ResetCandidateList extends React.Component {
  /*  Let's comment out the non-used constructor
  constructor(props) {
    super(props);
  }
  */

  // setupAndCallAjaxRESET = () => {
  //   fetch(DYNAMIC_WEB_SERVICE_API_SERVER_URL+"/resetCandidateList")
  //   .then( () => Response.json() )
  //   .then( (responseJsObject) => {
  //     console.log("Success in resetting the candidate list!");;
  //   })
  //   .catch(function(err) {
  //     console.log("Failure - " + err);
  //   });
  // };

  render() {
      return(
        <div>
          <h2>Resetting the back-end Candidate list to the original 5
              (This component has/needs no State nor props)</h2>
          <button onClick={this.props.resetCandidateList}>
            Press to reset the back-end list
          </button>
        </div>
      );
  }
}

export default connect( mapStateToProps,
  mapDispatchToProps) (ResetCandidateList);
