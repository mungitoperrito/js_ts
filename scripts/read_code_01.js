// Questions for interview candidates:
// What does this code do?


function print_something(value){

    if (value == 'a'){
        console.log('Option one');
    }
    else if (value == 'b') {
        process.exit();
        console.log('Option two');
    }
    else {
        console.log('Option three');
    }

    console.log('Option four');

    return value;
}

for (let v of [ 'a', 'b', 'c']) {
    let returns = print_something(v);
    console.log(returns);
}


/* OUTPUT
Option one
Option four
a
*/