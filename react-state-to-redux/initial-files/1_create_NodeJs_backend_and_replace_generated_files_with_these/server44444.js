var express = require('express');  // npm install express
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser'); // npm install body-parser


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(function (req, res, next) {
  "use strict";
  // We need the following as you'll run HTML+JS+Ajax+jQuery on http://localhost, 
  // but service is taken from http://protoNNN.haaga-helia.fi (NNN is some number)
  // https://www.w3.org/TR/cors/#access-control-allow-origin-response-header
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* candidates.json: 
[{"firstName":"Zoran","lastName":"Sakic","votes":22,
   "imageFileName":"portrait010.jpg"},  ... and so on ... ]
*/

// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
/* Example of correct tested request:

POST http://proto372.haaga-helia.fi/44444/addCandidate
Content-Type: application/json
{"firstName":"Aku","lastName":"Ankka","votes":313,
   "imageFileName":"portrait009.jpg"}

*/

app.post("/44444/addCandidate", function(req,res) {
    var firstName     = req.body.firstName;
    var lastName      = req.body.lastName;
    var votesText     = req.body.votes;
    var imageFileName = req.body.imageFileName;

    var votes = Number(votesText);

    if(firstName && firstName.trim() && lastName &&
          lastName.trim() && votes && !isNaN(votes)
          && imageFileName && imageFileName.trim()) {
      var newCandidateObject = {
 	    firstName,
	    lastName,
	    votes,
        imageFileName
      };

      fs.readFile(__dirname+'/'+'candidates.json', 'utf8', function(err, data) {
	    var candidateArray = JSON.parse(data);
	    candidateArray.push(newCandidateObject);
        var jsonText = JSON.stringify(candidateArray, null, 2); 
	    
	    fs.writeFile(__dirname+'/'+'candidates.json', jsonText, (err) => {
		  if(err) {
            res.end('{"error":"' +err +'"}' );
          } else {
            res.end('{"success":"' +firstName +' ' + lastName +' successfully added."}' );
          }
        }); 

      });
    } else {
      res.status(400);
      res.end('{"error":"Candidate information, missing, empty or invalid!"}' );
    }
});

// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
/* Example of correct tested request:

GET http://proto372.haaga-helia.fi/44444/candidates

*/
app.get("/44444/candidates", function(req,res) {
      fs.readFile(__dirname+'/'+'candidates.json', 'utf8',
        function(err, data) {
	       res.end(data);
        }
      ); 
    }
);

// 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
/* Example of correct tested request:

GET http://proto372.haaga-helia.fi/44444/resetCandidateList

*/
app.get("/44444/resetCandidateList", function(req,res) {
      fs.readFile(__dirname+'/'+'candidates-original.json', 'utf8', function(err1, data) {   
	    fs.writeFile(__dirname+'/'+'candidates.json', data, (err2) => {
		  if(err2) {
            	    res.end('{"error":"' +err +' , not able to reset candidate list!"}' );
          } else {
            res.end('{"success: Candidate list was reset! "}' );
          }
        }); 

      });
    
});

// 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
/* Example of correct tested request:

POST http://proto372.haaga-helia.fi/44444/checkIfNameExists
Content-Type: application/json
{"firstName":"Alex"}

*/
app.post("/44444/checkIfNameExists", function(req,res) {
    var firstName = req.body.firstName ;
    fs.readFile(__dirname+'/'+'candidates.json', 'utf8',
        function(err, data) {
           var countFound;
           var responseObject;
	       
           if(!err) {
              countFound = 0;   // 0 = not found. Yet.
             
              var candidateArray = JSON.parse(data);
             
              for(var i = 0; i<candidateArray.length; i++) {
                if(firstName === candidateArray[i].firstName) {
                  countFound++;   // One more found
                }
              }
              
           } else {
             countFound = -1;   // Some error happened
           }
      
           responseObject={"countFound": countFound};
           res.end(JSON.stringify(responseObject));
        }
    ); 
}
);

// 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
app.post("/44444/findCandidate", function(req,res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
  
    const missingFields = []; 
    if(!firstName) {
      missingFields.push("firstName");
    }
    if(!lastName) {
      missingFields.push("lastName");
    }

    let responseObject = {
      "error":
      "Back-end should have changed this object!"
    };

    if(!firstName && !lastName) {
      res.status(400).end(  
        JSON.stringify(
          {
            error:"firstName and/or lastName must be provided.", 
            
            missingFields:missingFields
          }
        )
      );  
      
    } else {
      fs.readFile(__dirname+'/'+'candidates.json', 'utf8',
        function(err, data) {
           var foundCandidate = null;
           
           if(!err) {   
              const cArray = JSON.parse(data);
             
              for(var i = 0; !foundCandidate && i<cArray.length; i++) {
                if(firstName && lastName) {
                  if(firstName === cArray[i].firstName &&
                    lastName === cArray[i].lastName) {
                    foundCandidate = cArray[i]; 
                  }  
                } else {
                  if(firstName || lastName) {
                    if(firstName === cArray[i].firstName  ||
                    lastName === cArray[i].lastName) {
                    foundCandidate = cArray[i];
                  }
                }
                }
              }
             if(foundCandidate) {
              responseObject = foundCandidate;
              res.status(200);
            } else {
              responseObject = {
                error:"Candidate with given firstName and/or lastName was not found."
              }
              res.status(404);
            }   
                
           } else {
             responseObject = {
                error:"File reading operation failed."
              }
             res.status(500);
           }
        
           res.end(JSON.stringify(responseObject));
        }); 
    }
}
);


// X X X X X X X X X SERVER START X X X X X X X X X X X X X X X
var portNumber = 44444;
var server = app.listen(portNumber, function() {
	console.log("Starting Node.js server listening at port:" +portNumber);
    console.log("On proto use only your given port 50XXX something!");
  }
);
