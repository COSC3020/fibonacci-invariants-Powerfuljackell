function fib(n){
    sequence = new Array(n);
    if (n >= 0) sequence[0] = 0;
    if (n >= 1) sequence[1] = 1;
    fibCalcSingle(n,sequence);
    return sequence;
}

function fibCalcSingle(n, fibArray) {
    if(n < 2){
        return;
    }
    fibCalcSingle(n-1,fibArray);
    fibArray[n] = (fibArray[n-1]+fibArray[n-2]);
    return;
}

//console.log(fib(4));