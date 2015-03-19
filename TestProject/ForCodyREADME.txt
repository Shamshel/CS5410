Files of interest:

controls.js --> Where the controls menu is located with its changing control values. 
gameplay.js --> Where the gameplay code intializes/runs and it calls unRegisterCommand and registerCommand
input.js --> Where the unRegisterCommand function is located (I only made one for keyboard events)


Important Variables:

var controls = {
        prevKeyUp: KeyEvent.DOM_VK_UP,
        prevKeyDown: KeyEvent.DOM_VK_DOWN,
        prevKeyLeft: KeyEvent.DOM_VK_LEFT,
        prevKeyRight: KeyEvent.DOM_VK_RIGHT,
        newKeyUp: undefined,
        changeUp: false,
        newKeyDown: undefined,
        changeDown:   false,
        newKeyLeft: undefined,
        changeLeft:   false,
        newKeyRight: undefined,
        changeRight:   false,
    };

This is just an object that has previous values and new values of keyCodes
The changeUp, changeDown, etc are just flags to tell the gameplay code if there has been a change to the previous controls.



Logic:

1. When the control menu first initializes it sets default controls to previous values and the new values are undefined.
2. When a user enters a new key, the changeLeft(Right,Up, or Down) functions handle the input
	If it is the first time changing the keyCodes from the default, it
	only sets the newKey value as the event.keyCode value

	If it is not the first time, it first sets previousVal to last newValue
	And then it sets the newValue to event.keyCode

3. When the user presses New Game, the initialize or run function (depending on how you write it) needs
   to check if a change of controls occured (changeLeft,R,U,or D flags)

	If a change has happened,
		unRegisterCommand(previousValue)
	then
		registerCommannd(newValue,handlerFunction)

	If no change has happend,
		Do nothing (Leave the controls the same)


Hopefully that helps.  Let me know if you have any questions.


Thanks!    