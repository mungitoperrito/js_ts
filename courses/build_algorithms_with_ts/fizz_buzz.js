/**
 * Print the numbers from 1 - 100
 * - for multiples of 3 print fizz
 * - for multiples of 5 print buzz
 * - for multiples of 3,5 print fizz buzz
 */
for (var num = 1; num <= 100; num++) {
    var isFizz = num % 3 === 0;
    var isBuzz = num % 5 === 0;
    var result = isFizz && isBuzz // Combined check first
        ? 'FizzBuzz'
        : isFizz
            ? 'Fizz' // Nested ternary operators
            : isBuzz
                ? 'Buzz'
                : num;
    console.log(result);
}
