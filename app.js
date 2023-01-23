console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let countUp = 1; countUp <= 100; countUp++) {
    if (countUp % 2 == 1) {
        console.log(`${countUp} is an odd number`); 
    } else {
        continue;
    }
} 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let num = 1; num <=100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(`${num} FIZZBUZZ`);
    }
    if (num % 3 == 0) {
        console.log(`${num} FIZZ`);
    } else if (num % 5 == 0) {
        console.log(`${num} BUZZ`)
    } else {
        console.log(num)
        continue;
    }
} 

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log(`${i} is an odd number`);
    }
    i++
}

do {
    if (i % 2 != 0) {
    console.log(`${i} is an odd number`)
    }
    i++ 
} while (i <= 100);


let n = 1
while (n <= 100) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    if (n % 3 == 0) {
        console.log('FIZZ');
    }
    if (n % 5 == 0) {
        console.log("BUZZ")
    }
    if (n % 3 != 0 && n % 5 !=0) {
        console.log(n)
    }
    n++;
} 

do {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FIZZBUZZ");
    }
    if (n % 3 == 0) {
        console.log('FIZZ');
    }
    if (n % 5 == 0) {
        console.log("BUZZ")
    }
    if (n % 3 != 0 && n % 5 !=0) {
        console.log(n)
    }
    n++;
} while (n <= 100); 

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
console.log(`value: ${value}`)
let number = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`n: ${number}`)

for (let turn = 0; turn <= number; turn++) {
    if (value > number) {
        console.log("Did not find value");
        break;
    } else if (turn == value){
        console.log("Found value");
    }
} 

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let o = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`fizzDivisor is: ${fizzDivisor}`);
console.log(`buzzDivisor is: ${buzzDivisor}`);

for (let int = start; int <= o; int++) {
    if (int % fizzDivisor == 0 && int % buzzDivisor == 0) {
        console.log(`${int} FIZZBUZZ`)
    } else if (int % fizzDivisor == 0) {
        console.log(`${int} FIZZ`);
    } else if (int % buzzDivisor == 0) {
        console.log(`${int} BUZZ`)
    } else {
        console.log(int)
        continue;
    }
}