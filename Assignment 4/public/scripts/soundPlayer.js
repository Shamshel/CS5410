//Function used to play music anywhere in the Assignment_4 global space

Assignment_4.playSound = function (whichSound,vol) {
    var property = whichSound + '.' + Assignment_4.audioExt;
		//element = document.getElementById(idComplete);

    //element.innerHTML = 'playing';
    //Assignment_4.sounds[property].addEventListener('ended', function () {
    //    element.innerHTML = 'ended';
    //});

    Assignment_4.sounds[whichSound + '.' + Assignment_4.audioExt].volume = vol;
    Assignment_4.sounds[whichSound + '.' + Assignment_4.audioExt].play();
};