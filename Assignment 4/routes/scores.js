//------------------------------------------------------------------
//
// This is some dummy score data
//
//------------------------------------------------------------------
var scores = [],
    jsnText,
	fs = require('fs'),
	text = undefined,
	fileName = 'highScores.txt';

//------------------------------------------------------------------
//
// Read file and get high scores
//
//------------------------------------------------------------------
fs.readFile(fileName, function (err, data) {

    if (err) throw err;

    text = data.toString();
    //console.log(text);

    scores = JSON.parse(text);

    //console.log('Id: ' + scores[0].id);
    //console.log('Scores: ' + scores[0].score);

});


//------------------------------------------------------------------
//
// Report all scores back to the requester.
//
//------------------------------------------------------------------
exports.all = function (request, response) {
    console.log('find all scores called');
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(scores));
};

//------------------------------------------------------------------
//
// Add a new score to the server data.
//
//------------------------------------------------------------------
exports.add = function (request, response) {
    console.log('add new score called');
    console.log('Name: ' + request.query.name);
    console.log('Score: ' + request.query.score);

    var now = new Date();
    scores.push({
        id: (scores[scores.length - 1].id) + 1,
        name: request.query.name,
        score: request.query.score,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString()
    });

    //------------------------------------------------------------------
    //
    // Write to file
    //
    //------------------------------------------------------------------
    jsnText = JSON.stringify(scores);

    fs.writeFile(fileName, jsnText, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    //------------------------------------------------------------------
    //
    //------------------------------------------------------------------
    response.writeHead(200);
    response.end();
};