// Mad libs


function wordBlanks( noun, adjective, verb, adverb){
    let result = "";

    // Template literal is like Python fstring
    result = `The ${noun} ${adverb} ${verb} into the ${adjective} pool.`

    return result
}

console.log(wordBlanks("cat", "blue", "jumps", "suddenly"))
console.log(wordBlanks("stuffie", "big", "sees", "boldly"))