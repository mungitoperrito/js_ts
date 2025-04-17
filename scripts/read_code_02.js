// Questions for interview candidates:
// What does this code do?

function mystery_operation(input_str){
    let length = input_str.length;
    let output_str = '';

    for (let i = length-1 ; i >= 0 ; i--){
        output_str += input_str[i];
    }

    return output_str;
}

console.log(mystery_operation('abcde'));