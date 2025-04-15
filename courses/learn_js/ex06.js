// Golf

// BUG: Gets 0 for par and strokes.

var strokeCountNames = ["hole in one", "eagle", "birdie", "par", "bogey",
    "double bogey"];

function golfScore(par, strokes){
    if (strokes == 1){
        return strokeCountNames[0];            // Hole in one
    } else if (strokes - par == -2){
        return strokeCountNames[1];            // Eagle
    } else if (strokes - par == -1){
        return strokeCountNames[2];            // Birdie
    } else if (strokes - par == 0){
        return strokeCountNames[3];            // Par
    } else if (strokes - par == 1){
        return strokeCountNames[4];            // Bogey
    } else if (strokes - par == 2){
        return strokeCountNames[2];            // Double bogey
    } else if (strokes < par) {
        return ("Well done.");
    } else {
        return ("Too bad, so sad");           // Should never happen
    }
}

function getStrokes(){
    let min = 1;
    let max = 10;
    const MIN = Math.ceil(min);
    const MAX = Math.floor(max);

    let value = (Math.floor(Math.random() * (max - min + 1))) + min ; // Number 0 to 9
    return Math.ceil(value / 2)   // Number 1 to 5   (floor gets 0, ceiling gets 1)
}

function setPar(){
    let min = 2;
    let max = 6;
    let range = (max-min) + min;

    let value = (Math.floor(Math.random() * range));
    return value;
}

let strokes = getStrokes();
let par = setPar();
console.log("S: ", strokes, "P: ", par, "Score: ", golfScore(par, strokes));
