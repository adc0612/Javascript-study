// 1. Use Strict
// added in ES5
// use this for Vanila JS
'use Strict';

// 2. Variable, rw = read/write 읽고 쓰기가 가능
// let (added in ES6)
// Global scope 변수
let globalName = 'Global Name'; {
    //괄호 안에다 선언하면 괄호 내 local scpoe 변수
    let name = 'hoi';
    console.log(name);
    name = 'hello';
    console.log(name);
}

//var hoisting
//변수를 var로 선언하기전에 이용가능, local, global 개념없이 어디서든 사용가능
//아래처럼 이용해도 에러없이 이용가능
//아래 age는 undefined값이 담겨있음
console.log(age);
age = 4;
var age;

//3. constants, r (read only) 한번 선언하면 읽기만 가능
// favor immutable data type always for a few reason
//  - security
//  - thread safety
//  - reduce human mistake
const daysInWeek = 7;
console.log(`value: ${daysInWeek}, type: ${typeof daysInWeek}`);

// note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Muatable data types: all objects by default are mutable in JS
// favor immutable data type always for a new reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. variable types
// primitive, single item: num, string, boolean, null, undefined
// object, box container
// function, first-class function

const cnt = 17; //int
const size = 17.1; //decimal
console.log(`value: ${cnt}, type: ${typeof cnt}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric value: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(`value: ${infinity}, type: ${typeof infinity}`);
console.log(`value: ${negativeinfinity}, type: ${typeof negativeinfinity}`);
console.log(`value: ${nAn}, type: ${typeof nAn}`);

// bigInt (new) 아직 chrome firefox에서만 지원
const bigInt = 12345678901234567890123456789012345678901234567890; // (-2*53) ~ (2*53) 
console.log(`value = ${bigInt}, type: ${typeof bigInt}`);

//  string
const char = 'a';
const charlie = 'charlie';
const sentence = 'hello ' + charlie;
console.log(`value: ${char}, type: ${typeof char}`);
console.log(`value: ${sentence}, type: ${typeof sentence}`);
const sentence2 = `hi ${charlie}!`; //template literals(string)
console.log(`value: ${sentence2}, type: ${typeof sentence2}`);

// boolean
// false: 0, null, undefined, nAn, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 변수 하나하나 고유의 식별자를 저장
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 변수 하나하나 고유의 식별자를 가지고 있어 둘의 값은 같지않음!!
console.log(symbol1 === symbol2); // false!
// symbol에 for를 붙이면 괄호 안에 있는 값에 맞게 고유의 식별자를 저장
// 그래서 for안에 있는 값이 같으면 고유의 식별자도 맞다.
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
// for 안에 있는 값에 맞게 고유의 식별자를 가지고 있어 둘의 값은 같음!!
console.log(gsymbol1 === gsymbol2); //true!
// symbol 변수 자체를 출력하면 에러가 나고 .description을 이용해 String값으로 변환 후 출력 가능
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5. dynamic typing: dynamically typed language
// Java, C# 같은 언어는 컴파일 타임에 타입이 결정되는 정적 타입 언어(static typed language)이다.
// 반면에 JavaScript, Python, Ruby 같은 언어는 실행 중에 비로소 타입을 알 수 있는 동적 타입 언어(dynamic typed language)이다.
let text = 'hello';
//처음에 text변수를 hello로 넣어서 type은 String
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
// text변수에 1을 넣어서 text type이 number로 변경
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
// '7'+5는 '7'이라는 String에 5를 String끼리 붙여주는 것으로 인정하여 75가 String으로 인식되서 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
// '8' / '2' 는 나누기면서 두 String 안에 들은것이 숫자임을 인식하세 나눗셈이 이뤄지고 type이 number로 출력
console.log(`value: ${text}, type: ${typeof text}`);

