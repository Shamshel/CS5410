/*jslint browser: true, white: true, plusplus: true */
/*global MYGAME */
MYGAME.screens['controls'] = (function () {
    'use strict';

    //Set default controls
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

    function initialize() {
        document.getElementById('id-controls-back').addEventListener(
			'click',
			function () { MYGAME.game.showScreen('main-menu'); },
			false);

    }

    function run() {
        //
        // I know this is empty, there isn't anything to do.
    }

    function changeLeft(e) {
        //console.log('change left...');
        if (controls.newKeyLeft === undefined) {
            controls.newKeyLeft = e.keyCode;
            controls.changeLeft = true;
        }
        else {
            controls.prevKeyLeft = controls.newKeyLeft;
            controls.newKeyLeft = e.keyCode;
            controls.changeLeft = true;
        }

    }

    function changeRight(e) {
        //console.log('change right...');
        if (controls.newKeyRight === undefined) {
            controls.newKeyRight = e.keyCode;
            controls.changeRight = true;
        }
        else {
            controls.prevKeyRight = controls.newKeyRight;
            controls.newKeyRight = e.keyCode;
            controls.changeRight = true;
        }
    }

    function changeUp(e) {
        //console.log('change up...');
        if (controls.newKeyUp === undefined) {
            controls.newKeyUp = e.keyCode;
            controls.changeUp = true;
        }
        else {
            controls.prevKeyUp = controls.newKeyUp;
            controls.newKeyUp = e.keyCode;
            controls.changeUp = true;
        }
    }

    function changeDown(e) {
        //console.log('change down...');
        if (controls.newKeyDown === undefined) {
            controls.newKeyDown = e.keyCode;
            controls.changeDown = true;
        }
        else {
            controls.prevKeyDown = controls.newKeyDown;
            controls.newKeyDown = e.keyCode;
            controls.changeDown = true;
        }
    }

    function clearBox(div) {
        document.getElementById(div).value = '';
    }

    return {
        initialize: initialize,
        run: run,
        changeLeft: changeLeft,
        changeRight: changeRight,
        changeUp: changeUp,
        changeDown: changeDown,
        clearBox: clearBox,
        controls: controls,
    };
}());
