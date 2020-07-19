// increment
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


// logical operator: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; //false

// ||(or), finds first truthy value (if it finds true value then it stops does not go into other value)
// important!!!!
// 밑에서 value1이 true니까 or 탐색이 끝나 check함수가 실행되지 않는다.
// 함수처럼 heavy한 것들을 맨 앞에 두면 시간이 많이 걸리므로 최대한 뒤에 배치한다.
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds first falsy value (if it finds false value then it stops does not go into other value) 
// important!!!!
// 밑에서 value3이 false니까 and 탐색이 끝나 check함수가 실행되지 않는다.
// 함수처럼 heavy한 것들을 맨 앞에 두면 시간이 많이 걸리므로 최대한 뒤에 배치한다.
const value3 = false;
console.log(`or: ${value3 || value2 || check()}`);
function check() {
    for (let i = 0; i < 10; i++) {
        // 시간 낭비하는 함수
        console.log(i);
    }
    return true;
}