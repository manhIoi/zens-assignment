const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function miniMaxSum(arr) {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value !== 'number' || value <= 0 || !value) {
            return null;
        }
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value
        }
        total += value;
    }

    const minSum = total - max;
    const maxSum = total - min;

    return [minSum, maxSum];
}


function main() {
    rl.question('Enter array integer number with space between: ', (input) => {
        const arr = input.split(' ').map(Number);
        const result = miniMaxSum(arr);
        if (result === null) {
            console.log(`Invalid input please try again!`,)
            rl.close();
            return;
        }
        const [minSum, maxSum] = result;
        console.log('Minimum, Maximum sum value:', minSum, maxSum);
        rl.close();
    });
}

main()