'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits)
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for(let i of fruits){
    console.log(i);
}
// c. for each
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);

// pop: delete an item from the end
fruits.pop();
console.log(fruits.pop());
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon','melon');
console.log(fruits);

// shift: remoeve an tiem from the beginnig
fruits.shift()
console.log(fruits.shift());
console.log(fruits);

// note!! shift and unshift are slower than pop, push
// shift와 unshift는 pop push와 같이 빈공간에 데이터를 넣는것이 아니라
// 앞에서 부터 들어있는 item들을 뒤로 옮겨 자리를 만든 다음 넣는것이라 오래걸린다

// splice: remove an item by index position
fruits.push('strawberry','melon','orange');
console.log(fruits);
// 첫번째 인자는 index이고 두번째 인자는 지울 숫자 갯수이다.
// index만 써줄경우 index기준으로 끝까지 모든 데이터가 꺼내진다.
fruits.splice(2);
console.log(fruits);
fruits.push('strawberry', 'melon', 'orange');
console.log(fruits);
// index와 지울 숫자 갯수를 써주면 index기준으로 지울 숫자 갯수만큼 지워진다.
fruits.splice(2,1);
console.log(fruits);
// 지울 숫자 갯수 옆에 item을 써주면 index기준으로 지울 숫자 갯수만큼 꺼내지고 item들이 그자리에 삽입된다.
fruits.splice(2,1,'grape','pear','lemon');
// index에 0을 넣으면 item들이 삭제되지않고 추가만 된다.
fruits.splice(2,0,'grape','pear','lemon');
console.log(fruits);

// concat: combine two or more arrays
const fruits2 = ['coconut','lime'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index (같은 값이 중복으로 array안에 있을 때 제일 처음에 있는 item의 index값을 가져온다.)
console.log(fruits);
console.log(fruits.indexOf('lemon'));
console.log(fruits.indexOf('apple'));
// 없는 item의 indexOf를 할때 -1값을 반환한다.
console.log(fruits.indexOf('coco'));

// includes: 배열안에 해당아이템이 없는지 확인
console.log(fruits.includes('grape'));
console.log(fruits.includes('coco'));

// lastIndexOf: 배열안에 같은 값이 2개일때 제일 뒤에있는 값의 index를 가져온다.
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));