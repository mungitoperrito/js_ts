// Scope

let global_01 = 1;

function function_01(){
    let local_01 = 100;

    console.log("L01 ", local_01);

    local_01++;
    console.log("L01 ", local_01);

    global_01++;                  // Gets updated from anywhere
}


function function_02(){
    let local_f02 = 20;         // Gets reset each time function called
    let local_01 = 111;         // New variable (not from function_01)
    console.log("L02 ", local_01, local_f02);

    global_01++;
}


for (let i = 0; i < 3; i++){
    function_01();
    function_02();
    console.log("G01 ", global_01);
    console.log();
}



