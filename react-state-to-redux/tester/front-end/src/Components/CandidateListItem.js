import React, { Component } from 'react';
import {MEDIA_WEB_SERVER_URL} from '../CONSTANTS/Constants';

const styles = {
  candidateListSmallImage: {
    height: "60px",
    width: "43px",
  }
};

class CandidateListItem extends Component {
  render() {
    return (<tr>
        <td>{this.props.lastName}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.votes} votes</td>
        <td><img style={styles.candidateListSmallImage}
            src={MEDIA_WEB_SERVER_URL+this.props.imageFileName}
            alt={this.props.lastName+","+this.props.firstName} /></td>
      </tr>
    );
  }
}

export default CandidateListItem;
