function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b <= num) {
        let c = a + b;
        a = b;
        b = c;

        if (b === num) {
            return true;
        }
    }
}


const number = 8;

if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}