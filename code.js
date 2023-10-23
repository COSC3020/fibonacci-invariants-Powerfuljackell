function fib(n){
    sequence = new Array();
    for(let i = 0; i <= n; i++){
        sequence.push(fibCalcSingle(i));
    }
    return sequence;
}

function fibCalcSingle(n) {
    if(n < 2){
        return n;
    }
    return fibCalcSingle(n-1) + fibCalcSingle(n-2);
}