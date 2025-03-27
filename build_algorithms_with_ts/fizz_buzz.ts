/**
 * Print the numbers from 1 - 100
 * - for multiples of 3 print fizz
 * - for multiples of 5 print buzz
 * - for multiples of 3,5 print fizz buzz
 */


for ( let num = 1; num <= 100;  num++) {
    const isFizz = num % 3 === 0;
    const isBuzz = num % 5 === 0;

    const result =
        isFizz && isBuzz              // Combined check first
            ? 'FizzBuzz'
            : isFizz
                ? 'Fizz'              // Nested ternary operators
                : isBuzz
                    ? 'Buzz'
                    : num;

    console.log(result)

}