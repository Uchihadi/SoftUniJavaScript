function GCD2Num(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
    return false;

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while(num2) {
        var x = num2;
        num2 = num1 % num2;
        num1 = x;
    }
    return num1;
}

console.log(GCD2Num(12,13));