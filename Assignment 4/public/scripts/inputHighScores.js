//------------------------------------------------------------------
//
// Make a request to the server to add a new score.
//
//------------------------------------------------------------------
Assignment_4.addScore = function(score) {
    $.ajax({
        url: 'http://localhost:3000/v1/high-scores?score=' + score,
        type: 'POST',
        error: function () { alert('POST failed'); },
        success: function () {
            
        }
    });
}

//------------------------------------------------------------------
//
// Make a request to the server to obtain the current set of high
// scores
//
//------------------------------------------------------------------
Assignment_4.getScore = function(callback) {

    $.ajax({
        url: 'http://localhost:3000/v1/high-scores',
        cache: false,
        type: 'GET',
        error: function () { alert('GET failed'); },
        success: callback
    });

}