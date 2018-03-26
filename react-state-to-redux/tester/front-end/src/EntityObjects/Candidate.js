// Business entity class Candidate, Data-oriented class, Data-transfer object
// (DTO) class

// Using the ES6 = EcmaScript 2015 class syntax

// Was/is not used in the first versions !!! At least not yet in 2017-11-13

class Candidate {
  constructor(firstName,lastName,votes,imageFileName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.votes = Number(votes);
    this.imageFileName = imageFileName;

    // Just for testing
    this.toString = () => "Candidate " + this.firstName + " " +this.lastName
                  + " (" +this.imageFileName +"), " + this.votes + " votes.";

    this.stringify = () => JSON.stringify(this);

    // function that knows how to create real Candidate objects based on
    // Json "candidate" objects.
    parse = (candidateJsonText) => {
      var candidateJsObject = JSON.parse(candidateJsonText)
      var candidate = new Candidate(
                                      candidateJsObject.firstName,
                                      candidateJsObject.lastName,
                                      candidateJsObject.votes,
                                      candidateJsObject.imageFileName
                                    );
     return candidate;
    }
  }

}

export default Candidate;
