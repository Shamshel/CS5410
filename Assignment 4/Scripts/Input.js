/*jslint browser: true, white: true */
/*global MYGAME */

//------------------------------------------------------------------
//
// Source: http://stackoverflow.com/questions/1465374/javascript-event-keycode-constants
//
//------------------------------------------------------------------
if (typeof KeyEvent === 'undefined') {
    var KeyEvent = {
        DOM_VK_CANCEL: 3,
        DOM_VK_HELP: 6,
        DOM_VK_BACK_SPACE: 8,
        DOM_VK_TAB: 9,
        DOM_VK_CLEAR: 12,
        DOM_VK_RETURN: 13,
        DOM_VK_ENTER: 14,
        DOM_VK_SHIFT: 16,
        DOM_VK_CONTROL: 17,
        DOM_VK_ALT: 18,
        DOM_VK_PAUSE: 19,
        DOM_VK_CAPS_LOCK: 20,
        DOM_VK_ESCAPE: 27,
        DOM_VK_SPACE: 32,
        DOM_VK_PAGE_UP: 33,
        DOM_VK_PAGE_DOWN: 34,
        DOM_VK_END: 35,
        DOM_VK_HOME: 36,
        DOM_VK_LEFT: 37,
        DOM_VK_UP: 38,
        DOM_VK_RIGHT: 39,
        DOM_VK_DOWN: 40,
        DOM_VK_PRINTSCREEN: 44,
        DOM_VK_INSERT: 45,
        DOM_VK_DELETE: 46,
        DOM_VK_0: 48,
        DOM_VK_1: 49,
        DOM_VK_2: 50,
        DOM_VK_3: 51,
        DOM_VK_4: 52,
        DOM_VK_5: 53,
        DOM_VK_6: 54,
        DOM_VK_7: 55,
        DOM_VK_8: 56,
        DOM_VK_9: 57,
        DOM_VK_SEMICOLON: 59,
        DOM_VK_EQUALS: 61,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90,
        DOM_VK_CONTEXT_MENU: 93,
        DOM_VK_NUMPAD0: 96,
        DOM_VK_NUMPAD1: 97,
        DOM_VK_NUMPAD2: 98,
        DOM_VK_NUMPAD3: 99,
        DOM_VK_NUMPAD4: 100,
        DOM_VK_NUMPAD5: 101,
        DOM_VK_NUMPAD6: 102,
        DOM_VK_NUMPAD7: 103,
        DOM_VK_NUMPAD8: 104,
        DOM_VK_NUMPAD9: 105,
        DOM_VK_MULTIPLY: 106,
        DOM_VK_ADD: 107,
        DOM_VK_SEPARATOR: 108,
        DOM_VK_SUBTRACT: 109,
        DOM_VK_DECIMAL: 110,
        DOM_VK_DIVIDE: 111,
        DOM_VK_F1: 112,
        DOM_VK_F2: 113,
        DOM_VK_F3: 114,
        DOM_VK_F4: 115,
        DOM_VK_F5: 116,
        DOM_VK_F6: 117,
        DOM_VK_F7: 118,
        DOM_VK_F8: 119,
        DOM_VK_F9: 120,
        DOM_VK_F10: 121,
        DOM_VK_F11: 122,
        DOM_VK_F12: 123,
        DOM_VK_F13: 124,
        DOM_VK_F14: 125,
        DOM_VK_F15: 126,
        DOM_VK_F16: 127,
        DOM_VK_F17: 128,
        DOM_VK_F18: 129,
        DOM_VK_F19: 130,
        DOM_VK_F20: 131,
        DOM_VK_F21: 132,
        DOM_VK_F22: 133,
        DOM_VK_F23: 134,
        DOM_VK_F24: 135,
        DOM_VK_NUM_LOCK: 144,
        DOM_VK_SCROLL_LOCK: 145,
        DOM_VK_COMMA: 188,
        DOM_VK_PERIOD: 190,
        DOM_VK_SLASH: 191,
        DOM_VK_BACK_QUOTE: 192,
        DOM_VK_OPEN_BRACKET: 219,
        DOM_VK_BACK_SLASH: 220,
        DOM_VK_CLOSE_BRACKET: 221,
        DOM_VK_QUOTE: 222,
        DOM_VK_META: 224
    };
}

if (typeof KeyTranslation === 'undefined') {
    var KeyTranslation = {
        DOM_VK_CANCEL: 'cancel',
        DOM_VK_HELP: 'help',
        DOM_VK_BACK_SPACE: 'backspace',
        DOM_VK_TAB: 'tab',
        DOM_VK_CLEAR: 'clear',
        DOM_VK_RETURN: 'return',
        DOM_VK_ENTER: 'enter',
        DOM_VK_SHIFT: 'shift',
        DOM_VK_CONTROL: 'ctrl',
        DOM_VK_ALT: 'alt',
        DOM_VK_PAUSE: 'pause',
        DOM_VK_CAPS_LOCK: 'caps lock',
        DOM_VK_ESCAPE: 'esc',
        DOM_VK_SPACE: 'space',
        DOM_VK_PAGE_UP: 'page up',
        DOM_VK_PAGE_DOWN: 'page down',
        DOM_VK_END: 'end',
        DOM_VK_HOME: 'home',
        DOM_VK_LEFT: 'left',
        DOM_VK_UP: 'up',
        DOM_VK_RIGHT: 'right',
        DOM_VK_DOWN: 'down',
        DOM_VK_PRINTSCREEN: 'print screen',
        DOM_VK_INSERT: 'insert',
        DOM_VK_DELETE: 'delete',
        DOM_VK_0: '0',
        DOM_VK_1: '1',
        DOM_VK_2: '2',
        DOM_VK_3: '3',
        DOM_VK_4: '4',
        DOM_VK_5: '5',
        DOM_VK_6: '6',
        DOM_VK_7: '7',
        DOM_VK_8: '8',
        DOM_VK_9: '9',
        DOM_VK_SEMICOLON: ';',
        DOM_VK_EQUALS: '=',
        DOM_VK_A: 'a',
        DOM_VK_B: 'b',
        DOM_VK_C: 'c',
        DOM_VK_D: 'd',
        DOM_VK_E: 'e',
        DOM_VK_F: 'f',
        DOM_VK_G: 'g',
        DOM_VK_H: 'h',
        DOM_VK_I: 'i',
        DOM_VK_J: 'j',
        DOM_VK_K: 'k',
        DOM_VK_L: 'l',
        DOM_VK_M: 'm',
        DOM_VK_N: 'n',
        DOM_VK_O: 'o',
        DOM_VK_P: 'p',
        DOM_VK_Q: 'q',
        DOM_VK_R: 'r',
        DOM_VK_S: 's',
        DOM_VK_T: 't',
        DOM_VK_U: 'u',
        DOM_VK_V: 'v',
        DOM_VK_W: 'w',
        DOM_VK_X: 'x',
        DOM_VK_Y: 'y',
        DOM_VK_Z: 'z',
        DOM_VK_CONTEXT_MENU: 'ctx menu',
        DOM_VK_NUMPAD0: 'num 0',
        DOM_VK_NUMPAD1: 'num 1',
        DOM_VK_NUMPAD2: 'num 2',
        DOM_VK_NUMPAD3: 'num 3',
        DOM_VK_NUMPAD4: 'num 4',
        DOM_VK_NUMPAD5: 'num 5',
        DOM_VK_NUMPAD6: 'num 6',
        DOM_VK_NUMPAD7: 'num 7',
        DOM_VK_NUMPAD8: 'num 8',
        DOM_VK_NUMPAD9: 'num 9',
        DOM_VK_MULTIPLY: '*',
        DOM_VK_ADD: '+',
        DOM_VK_SEPARATOR: ' ',
        DOM_VK_SUBTRACT: '-',
        DOM_VK_DECIMAL: '.',
        DOM_VK_DIVIDE: '/',
        DOM_VK_F1: 'F1',
        DOM_VK_F2: 'F2',
        DOM_VK_F3: 'F3',
        DOM_VK_F4: 'F4',
        DOM_VK_F5: 'F5',
        DOM_VK_F6: 'F6',
        DOM_VK_F7: 'F7',
        DOM_VK_F8: 'F8',
        DOM_VK_F9: 'F9',
        DOM_VK_F10: 'F10',
        DOM_VK_F11: 'F11',
        DOM_VK_F12: 'F12',
        DOM_VK_F13: 'F13',
        DOM_VK_F14: 'F14',
        DOM_VK_F15: 'F15',
        DOM_VK_F16: 'F16',
        DOM_VK_F17: 'F17',
        DOM_VK_F18: 'F18',
        DOM_VK_F19: 'F19',
        DOM_VK_F20: 'F20',
        DOM_VK_F21: 'F21',
        DOM_VK_F22: 'F22',
        DOM_VK_F23: 'F23',
        DOM_VK_F24: 'F24',
        DOM_VK_NUM_LOCK: 'num lock',
        DOM_VK_SCROLL_LOCK: 'scroll lock',
        DOM_VK_COMMA: ',',
        DOM_VK_PERIOD: '.',
        DOM_VK_SLASH: '/',
        DOM_VK_BACK_QUOTE: '\`',
        DOM_VK_OPEN_BRACKET: '[',
        DOM_VK_BACK_SLASH: '\\',
        DOM_VK_CLOSE_BRACKET: ']',
        DOM_VK_QUOTE: '"',
        DOM_VK_META: 'meta'
    };
}

// ------------------------------------------------------------------
//
//      Input module structure provided by Dean Mathias
//
// ------------------------------------------------------------------
Assignment_4.input = (function() {
	'use strict';
	
	function Mouse() {
		var that = {
				mouseDown : [],
				mouseUp : [],
				mouseMove : [],
				handlersDown : [],
				handlersUp : [],
				handlersMove : []
			};
		
		function mouseDown(e) {
			that.mouseDown.push(e);
			//console.log('mousedown - x: ' + e.clientX + ', y: ' + e.clientY);
		}
		
		function mouseUp(e) {
			that.mouseUp.push(e);
			//console.log('mouseup -   x: ' + e.clientX + ', y: ' + e.clientY);
		}
		
		function mouseMove(e) {
			that.mouseMove.push(e);
			//console.log('mousemove - x: ' + e.clientX + ', y: ' + e.clientY);
		}
		
		that.update = function(elapsedTime) {
			var event,
			    handler;
			//
			// Process the mouse events for each of the different kinds of handlers
			for (event = 0; event < that.mouseDown.length; event++) {
				for (handler = 0; handler < that.handlersDown.length; handler++) {
					that.handlersDown[handler](that.mouseDown[event], elapsedTime);
				}
			}
			
			for (event = 0; event < that.mouseUp.length; event++) {
				for (handler = 0; handler < that.handlersUp.length; handler++) {
					that.handlersUp[handler](that.mouseUp[event], elapsedTime);
				}
			}
			
			for (event = 0; event < that.mouseMove.length; event++) {
				for (handler = 0; handler < that.handlersMove.length; handler++) {
					that.handlersMove[handler](that.mouseMove[event], elapsedTime);
				}
			}
			
			//
			// Now that we have processed all the inputs, reset everything back to the empty state
			that.mouseDown.length = 0;
			that.mouseUp.length = 0;
			that.mouseMove.length = 0;
		};
		
		that.registerCommand = function(type, handler) {
			if (type === 'mousedown') {
				that.handlersDown.push(handler);
			}
			else if (type === 'mouseup') {
				that.handlersUp.push(handler);
			}
			else if (type === 'mousemove') {
				that.handlersMove.push(handler);
			}
		};
		
		window.addEventListener('mousedown', mouseDown.bind(that));
		window.addEventListener('mouseup', mouseUp.bind(that));
		window.addEventListener('mousemove', mouseMove.bind(that));
		
		return that;
	}
	
	function Keyboard() {
		var that = {
				keys : {},
				handlers : []
		},
            i,    
			key;
		
		function keyPress(e) {
			that.keys[e.keyCode] = e.timeStamp;
		}
		
		function keyRelease(e) {
			delete that.keys[e.keyCode];
		}
		
		// ------------------------------------------------------------------
		//
		// Allows the client code to register a keyboard handler
		//
		// ------------------------------------------------------------------
		that.registerCommand = function(key, handler) {
			that.handlers.push({ key : key, handler : handler});
		};

	    // ------------------------------------------------------------------
	    //
	    // Allows the client code to UN-register a keyboard handler
	    //
	    // ------------------------------------------------------------------
		that.unRegisterCommand = function (key, handler) {
		    for (i = 0; i < that.handlers.length; i++) {
		        if (that.handlers[i].key === key && that.handlers[i].handler === handler) {
		            that.handlers.splice(i, 1);
		        }
		    }
		};
		
		// ------------------------------------------------------------------
		//
		// Allows the client to invoke all the handlers for the registered key/handlers.
		//
		// ------------------------------------------------------------------
		that.update = function(elapsedTime) {
			for (key = 0; key < that.handlers.length; key++) {
				if (typeof that.keys[that.handlers[key].key] !== 'undefined') {
					that.handlers[key].handler(elapsedTime);
				}
			}
		};
		
		//
		// These are used to keep track of which keys are currently pressed
		window.addEventListener('keydown', keyPress.bind(that));
		window.addEventListener('keyup', keyRelease.bind(that));
		
		return that;
	}
	
	//Set default controls
    var controls = {
        prevKeyUp: KeyEvent.DOM_VK_UP,
        prevKeyDown: KeyEvent.DOM_VK_DOWN,
        prevKeyLeft: KeyEvent.DOM_VK_LEFT,
        prevKeyRight: KeyEvent.DOM_VK_RIGHT,
		prevKeyRotateRight: KeyEvent.DOM_VK_X,
		prevKeyRotateLeft: KeyEvent.DOM_VK_Z,
        newKeyUp: undefined,
        changeUp: false,
        newKeyDown: undefined,
        changeDown:   false,
        newKeyLeft: undefined,
        changeLeft:   false,
        newKeyRight: undefined,
        changeRight:   false,
		newKeyRotateLeft: undefined,
        changeRotateLeft:   false,
        newKeyRotateRight: undefined,
        changeRotateRight:   false,
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

	function changeRotateLeft(e) {
		//console.log('change rotate left...');
        if (controls.newKeyRotateLeft === undefined) {
            controls.newKeyRotateLeft = e.keyCode;
            controls.changeRotateLeft = true;
        }
        else {
            controls.prevKeyRotateLeft = controls.newKeyLeft;
            controls.newKeyRotateLeft = e.keyCode;
            controls.changeRotateLeft = true;
        }

    }
	
	function changeRotateRight(e) {
		//console.log('change rotate right...');
        if (controls.newKeyRotateRight === undefined) {
            controls.newKeyRotateRight = e.keyCode;
            controls.changeRotateRight = true;
        }
        else {
            controls.prevKeyRotateRight = controls.newKeyLeft;
            controls.newKeyRotateRight = e.keyCode;
            controls.changeRotateRight = true;
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
	
	return {
		Keyboard : Keyboard,
		Mouse : Mouse,
		changeLeft : changeLeft,
		changeRight : changeRight,
		changeUp : changeUp,
		changeDown : changeDown,
		controls : controls,
		
	};
}());

