// Anonymous functions

// Standard syntax
const funcVar_01 = function(){
    return "ANON";
};

// Arrow syntax
const funcVar_02 = () => {
    return "ANON";
};

// Compact syntax
const funcVar_03 = () => "ANON";


console.log( funcVar_01() );
console.log( funcVar_02() );
console.log( funcVar_03() );
