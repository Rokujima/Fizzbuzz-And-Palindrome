class fizzBuzz {

    fizz(n){
        return n % 3 ? "" : "fizz";
    }

    buzz(n){
        return n % 5 ? "" : "buzz";
    }

    exc(i, n){
        const arr = [];
        for(i ; i <= n ; i++ ){
            arr.push((this.fizz(i)+this.buzz(i)) || i);
        }
        return arr;
    }

}

// FizzBuzz start i to n
const fizzAndBuzz = new fizzBuzz()

console.log(fizzAndBuzz.exc(1,15));
