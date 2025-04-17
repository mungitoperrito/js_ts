// Questions for interview candidates:
// What does this code do?

function mystery_function_01(input_list){
    let output = [];

    for (let outer_element of input_list){
        for (let inner_element of input_list){
            output.push([outer_element, inner_element])
        }
    }

    return output;
}


function mystery_function_02(input_list){

    let output = [];

    for (let outer_element = 0 ; outer_element < input_list.length ; outer_element++){
        let inner_slice = input_list.slice(outer_element, input_list.length);
        for (let inner_element of inner_slice){
            output.push([input_list[outer_element], inner_element]);
        }
    }
    return output
}


let input_list = ['a', 'b', 'c', 'd', 'e'];

console.log(mystery_function_01(input_list));
console.log(mystery_function_02(input_list));


/* OUTPUT
mystery_function_01:
[
  [ 'a', 'a' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ], [ 'a', 'e' ],
  [ 'b', 'a' ], [ 'b', 'b' ], [ 'b', 'c' ], [ 'b', 'd' ], [ 'b', 'e' ],
  [ 'c', 'a' ], [ 'c', 'b' ], [ 'c', 'c' ], [ 'c', 'd' ], [ 'c', 'e' ],
  [ 'd', 'a' ], [ 'd', 'b' ], [ 'd', 'c' ], [ 'd', 'd' ], [ 'd', 'e' ],
  [ 'e', 'a' ], [ 'e', 'b' ], [ 'e', 'c' ], [ 'e', 'd' ], [ 'e', 'e' ]
]

mystery_function_02:
[
  [ 'a', 'a' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ], [ 'a', 'e' ],
  [ 'b', 'b' ], [ 'b', 'c' ], [ 'b', 'd' ], [ 'b', 'e' ],
  [ 'c', 'c' ], [ 'c', 'd' ], [ 'c', 'e' ],
  [ 'd', 'd' ], [ 'd', 'e' ],
  [ 'e', 'e' ]
]
*/