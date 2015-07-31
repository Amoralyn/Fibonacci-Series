var fib = [];
fib[0]=0;
fib[1]=1;
for(var i=2; i<=100; i++){
    fib[i]=fib[i-2]+fib[i-1];
    console.log(fib[i]);
}

var fib = function(i){
    if(i < 2){
        return 1;
    }else{
        return fib(i-2) + fib(i-1);
    }
};
fib(100);


var prime = function(num){
    if(num/num == 1 && num/1 == num){
        return (num + 'is a prime number');
    }
};


var prime = function(num){
var primeArr = [];
prime[0] = 1;
prime[1] = 2;
for (var i= 2; i<=num; i++){
    if(num%2 === 0 ||num%3 === 0 || num%5 === 0){
        return (num + 'is not a prime number');
    }else {
        return (num + 'is a prime number');
    }
}
};

prime(100);

for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
