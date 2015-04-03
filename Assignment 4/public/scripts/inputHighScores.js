//------------------------------------------------------------------
//
// Make a request to the server to add a new score.
//
//------------------------------------------------------------------
Assignment_4.addScore = function() {
    var name = $('#id-playerName').val(),
		score = $('#id-playerScore').val();

    $.ajax({
        url: 'http://localhost:3000/v1/high-scores?name=' + name + '&score=' + score,
        type: 'POST',
        error: function () { alert('POST failed'); },
        success: function () {
            showScores();
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