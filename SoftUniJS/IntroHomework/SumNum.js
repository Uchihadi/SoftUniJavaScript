function sum(n, m) {
    //Write your code here

    let result;

    let num1 = Number(n);
    let num2 = Number(m);

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

console.log(sum(5, 6));