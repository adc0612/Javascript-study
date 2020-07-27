// Function
// - Fundamental building block in the program
// - Aka subprogram - can be used for multiple time
// - performs a task or calculate a value

// 1. Function declaration
// function name (param1, param2) {body....return}
// one Funciton === one Thing (prefer)
// naming: doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS

function log(msg) {
    console.log(msg);
}
log('hello');

// 2. Parameters
// Premitive parameter: passed by value
// object paramether: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const p1 = {
    name: 'name1'
};
changeName(p1);
log(p1.name);

// 3. Default parameter (added in ES6)
// 두 인자를 받아야 하는 Function이다.
// 인자를 한개만 받았을 경우 undefined라고 뜬다.
// 아래 함수 호출 결과는 hi by unknown이다.
// ES6부터는 인자를 받지 않을때를 대비해 default parameter값을 설정할수있다.
function showMsg(msg = 'hyo', from = 'person') {
    console.log(`${msg} by ${from}`);
}
showMsg('hi');
showMsg();

// 4. Rest parameter (added in ES6)
// 인자를 배열 형태로 전달 가능
function printAll(...args) {
    //for loop 접근방법1
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // for loop 접근방법2
    for (const arg of args) {
        console.log(arg);
    }
    // for loop 접근방법3
    args.forEach((arg) => console.log(arg));
}

printAll('1st P', '2nd P', '4th p');

// 5. return a value
function sum(a, b) {
    return (a + b);
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 6. early return, early exit
// 함수 내 조건이 있을시, 조건이 맞을때 if 안에 로직을 거는 것 보다
// 조건이 안 맞을때 return하여 함수를 빨리 exit하고 아닐때 로직을 거는 것이 가독성에 더 좋다.
// bad
function upgradeUser(statusVal) {
    if (statusVal > 10) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(statusVal) {
    if (statusVal <= 10) {
        return;
    }
    // long upgrade logic...
}

// First class Function
// functions are treated like any other value
// can be assigned as a value to variable
// can be passed as an argument to another functions
// can be returned by another function

// 1. Function Expression
// a function declaration can be called earlier than it is defined (hoisted)
// hoist 가능 즉 함수를 선언전에 호출해도 호출 가능 (hoist는 JavaScript엔진이 선언을 제일 위로 끌어올려줘서 가능)
// a function expression is created when the excution reches it
// hoist 불가능 즉 함수를 변수에다 할당하면 선언 전에 호출 하면 에러 생성

const print = function () { //anonymous function
    console.log('print done');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(4, 5));

// 2.callback function using function expression
function randomQuiz(ans, printYes, printNo) {
    if (ans === 'korea') {
        printYes();
    } else {
        printNo();
    }
}
// anonymus function
const printYes = function () {
    console.log('yes');
}
// named function
// better debugging in debugger's stack traces
// recursion
const printNo = function print() {
    console.log('no');
    // 아래 처럼 print()함수를 선언하고 그안에다 print()함수를 다시 선언하면 recursion발생
    // print();
}
randomQuiz('japan', printYes, printNo);
randomQuiz('korea', printYes, printNo);

// arrow function (added in ES6)
// always anonymus
const simplePrint = function () {
    console.log('simple print');
};

const simplePrintAr = () => console.log('simple pirnt');
// const add = (a,b) => a+b;
// 아래와 같이 중괄호를 쓰게 되면 return이 꼭 필요!
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}
// add(7,18);
simplePrint();
simplePrintAr();

// IIFE: Imediately Invoked Function Expression
// 선언과 동시에 실행
(function hello() {
    console.log('hello IIFE');
})();

// calculate function
// function (command, a, b)

function calculate(command, a, b) {
    let res;
    if (command === 'add') {
        res = add(a, b);
    } else if (command === 'subtract') {
        res = subtract(a, b);
    } else if (command === 'multiply') {
        res = multiply(a, b);
    } else if (command === 'divide') {
        res = divide(a, b);
    } else {
        res = "error";
    }
    printres(res);
}

function calculateSW(command, a, b) {
    let res;
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const printRes = (val) => console.log(val);

calculate('add', 4, 5);
calculate('subtrack', 4, 5);
calculate('multiply', 4, 5);
calculate('divide', 4, 5);

console.log(calculateSw('add', 4, 5));
console.log(calculateSw('subtrack', 4, 5));
console.log(calculateSw('multiply', 4, 5));
console.log(calculateSw('divide', 4, 5));
console.log(calculateSw('remainder', 4, 5));