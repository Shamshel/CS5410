Assignment_4.sovlerAI = (function() {
    'use strict';

    //Roughly following AI implementation from:
    //https://codemyroad.wordpress.com/2013/04/14/tetris-ai-the-near-perfect-player/

    //We want these values:
    //  Height: LOW
    //  Holes: LOW
    //  Smoothness: LOW
    //  LinesCleared: HIGH


    function aiJarvis() {
        
        var that = {
            nextBlock: {},
            moves: [],
            testGrid: [],
            curGrid: [],
            moveChosen: false
        },
            i = 0,
            j = 0

        //Make array of moves (40 different moves in total)
        for (i = 0; i < 40; i++) {
            that.moves[i] = { height: undefined, holes: undefined, smooth: undefined, lines: undefined };
        }

        //Make empty grids
        for (i = 0; i < 22; i++) {
            that.testGrid.push([]);
            for (j = 0; j < 10; j++) {
                that.testGrid[i].push(undefined);
            }
        }

        for (i = 0; i < 22; i++) {
            that.curGrid.push([]);
            for (j = 0; j < 10; j++) {
                that.curGrid[i].push(undefined);
            }
        }

        //Sets AI grid to game Grid
        that.createGrid = function(gameGrid, aiGrid){
            for(i = 0; i < 22; i++){
                for(j = 0; j<10; j++){
                    if(gameGrid[i][j] == undefined){
                        aiGrid[i][j] = undefined;   
                    }
                    else {
                        aiGrid[i][j] = 1;
                    }
                }
            }
        };

        //Sets total height and smoothness of current grid after tried move
        that.solveHeightSmooth = function (index) {
            var i = 0,
                j = 0,
                sumH = 0,
                sumC = 0,
                sumS = 0,
                cols = [0,0,0,0,0,0,0,0,0,0]

            for(j = 0; j < 10; j++){
                for(i = 0; i < 22; i++){
                    if(that.testGrid[i][j] != undefined){
                        sumC++;
                    }
                }
                cols[j] = sumC;
                sumH += sumC;
                sumC = 0;
            }

            //Find smoothness factor
            for(i = 0; i<9; i++){
                sumS += Math.abs(cols[i]-cols[i+1]);
            }

            that.moves[index].smooth = sumS; 
            that.moves[index].height = sumH;
        };

        //Sets total # of holes in current grid after tried move
        that.solveHoles = function (index) {
            var i = 0,
                j = 0,
                sumH = 0

            //Find Holes
            for(i = 1; i < 22; i++){
                for(j = 0; j < 10; j++){
                    if(that.testGrid[i][j] == undefined){
                        if(that.testGrid[i-1][j] != undefined){
                            sumH++;   
                        }
                    }
                }
            }

            that.moves[index].holes = sumH; 
        };

        //Sets total # of lines cleared after tried move
        that.solveLinesCleared = function (index) {
            var i = 0,
                j = 0,
                sumL = 0,
                emptyF = true

            //Find Holes
            for(i = 0; i < 22; i++){
                for (j = 0; j < 10; j++){
                    if(that.testGrid[i][j] == undefined){
                        emptyF = false;
                    }
                }
                if(emptyF == true){
                    sumL++;
                }
                emptyF = true;
            }

            that.moves[index].lines = sumL; 
        };

        //Compares two moves' parameters to see which is better
        that.compareMoves = function (move1, move2) {

        };

        //Rotate the block to chosen rotation
        that.rotateBlock = function () {

        };

        //Moves the block to chosen position
        that.moveBlock = function () {

        };

        that.update = function (elapsedTime, gameGrid, blockDropFlag, nextBlock) {

            //if there is a new block to fall, or if the game has just started
            if (blockDropFlag === true) {
                that.createGrid(gameGrid,that.curGrid);
                that.createGrid(gameGrid,that.testGrid);
                that.nextBlock = nextBlock;
                that.moveChosen = false;

                //Get parameters for each move
                for (i = 0; i < 1; i++) {
                    that.solveHeightSmooth(i);
                    that.solveHoles(i);
                    that.solveLinesCleared(i);

                    console.log('------------------------------');
                    console.log('Height: ' + that.moves[i].height);
                    console.log('Holes: ' + that.moves[i].holes);
                    console.log('Smooth: ' + that.moves[i].smooth);
                    console.log('Lines: ' + that.moves[i].lines);
                    console.log('------------------------------');
                    //Reset test grid to current game grid for next move testing
                    //that.createGrid(that.curGrid, that.testGrid);
                }
            }

            //if(that.moveChosen === false){

                

                //Compare moves and keep the best move
                //for(i = 0; i<39, i++){
                  //  that.compareMoves(i, (i+1));

                    //that.moveChosen = true;
                //}

            //}

            //else {
                
             //   that.rotateBlock();
             //   that.moveBlock();
            //}

        };

        that.render = function (context) {
            //context.save();

            //context.restore();

        };

        return that;

    }

    return {

        aiJarvis: aiJarvis

    };

}());