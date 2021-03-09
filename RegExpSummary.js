// Flag

// Flag g를 안 붙힌 regExp
// 중복문자 있어도 단 하나 문자만 배열에 저장되어 출력
let xg = /a/;
console.log('ewewatada'.match(xg)); //Array [ "a" ]
// Flag g를 붙힌 RegExp
// 중복문자 있어도 있는 문자를 다 출력한다.
let og = /a/g;
console.log('ewewatada'.match(og)); //Array(3) [ "a", "a", "a" ]

// Flag m
let str = `is\nthis\nhis\n?`
// 한 줄의 끝 단어가 is일때 출력
// Flag m을 안 붙힌 RegExp
let xm = /is$/g;
console.log(str.match(xm)); // null
// Flag m을 붙힌 RegExp
let om = /is$/gm;
console.log(str.match(om)); // Array(3) [ "is", "is", "is" ]

let str1 = `is\nis th\nis it?`
// 한 줄의 시작 단어가 is일때 출력
// Flag m을 안 붙힌 RegExp
let xm1 = /^is/g;
console.log(str1.match(xm1)); // Array [ "is" ]
// Flag m을 붙힌 RegExp
let om1 = /^is/gm;
console.log(str1.match(om1)); // Array(3) [ "is", "is", "is" ]

// Flag i
// Flag i 안 붙힌 regExp
// 대소문자 상관 하여 대소문자 맞춰서 결과 출력함
let xi = /a/;
console.log('dsfefA'.match(xi)); //null
// Flag i를 붙힌 RegExp
// Flag i를 붙히면 대소문자 관계없이 regExp 조건을 실행
let oi = /a/i;
console.log('dsfefA'.match(oi)); //Array [ "A" ]

// Flag u
console.log("🤡🤧👺💀👻👽🤖💩😺😸😹😻😼😽🙀😿😾".match(/[😸-😿]/gu)); //Array(8) [ "😺", "😸", "😹", "😻", "😼", "😽", "😿", "😾" ]

// Flag을 한번에 사용가능
// i와 g를 붙히면 대소문자 상관없이 중복된 문자가 있어도 상관없이 다 출력
let oig = /a/ig;
console.log('ewewAtada'.match(oig));