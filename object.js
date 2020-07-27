'use strict';
// objects
// One of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key: value}

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax (class template 이용)

function print(Person) {
    console.log(Person.name);
    console.log(Person.age);
}

const peter = {
    name: 'peter',
    age: 25
};
print(peter);

// with JavaScript 'Magic' (dynamically typed language)
// 동적으로 type이 Runtime때 결정되는언어!!!!
// can add properties later
peter.hasJob = true;
console.log(peter.hasJob);

// can delete properties later
delete peter.hasJob
console.log(peter.hasJob);

// 2. Computed properties
// Object의 key가 동적으로 즉 어떤 key를 사용할지 결정이 안됐을때 사용
// keys should be always string

// 평소 object 접근방법
console.log(peter.name);
// computed properties로 접근 방법
console.log(peter['name']);
// computed properties로 object key 추가
peter['hasJob'] = true;
console.log(peter.hasJob);

function printValue(obj, key) {
    // obj.key 로는 접근이 안됩
    console.log(obj[key]);
}
printValue(peter, 'name');
printValue(peter, 'age');
printValue(peter, 'hasJob');

// 3. Property value shorthand (아마 ES6에 추가된 내용)
const Person1 = {
    name: 'Bob',
    age: 24
};
const Person2 = {
    name: 'Fr',
    age: 25
};
const Person3 = {
    name: 'De',
    age: 21
};
const Person4 = makePerson('Jo', 21);
console.log(Person4);

// function에 같은 이름의 field들에 값을 대입해줄때 두번 쓸 필요가 없다.
function makePerson(name, age) {
    return {
        // name: name
        // age: age
        name,
        age
    }
}

// 4. Constructor
// 위에 함수처럼 Object를 만들때는 constructor를 써준다.
// function 에 대문자로 쓰는것이 constructor만들 때 암묵적인 룰
// return이 생략되어있다.
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}
// constructor 쓸때는 new 붙여줘야한다.
const Person5 = new Person('Jop', 32);
console.log(Person5);

// 5. in operator: property existence check (key in object)
// 해당 object에 해당 key가 있는지 확인해줌 (true false를 반환)
console.log('name' in peter);
console.log('age' in peter);
console.log('random' in peter);
console.log(peter.random);

// 6. for..in or for..of
// for (key in obj)
for (let key in peter) {
    console.log(key);
}

// for (value of iterable)
const arr = [1, 2, 3, 6, 7];
for (let val of arr) {
    console.log(val);
}

// 7. cloning
// Object.assign(dest,[obj1,obj2,obj3....])
const user = {
    name: 'peter',
    age: 30
};
// user2 = user로 이렇게 복사를 하면 user에 가진 reference를 user2로 가져오는것이므로
// user2의 value를 변경할 경우 user의 value도 변경이 된다. 
// 즉 이건 제대로 된 clone이 아니다.
const user2 = user;
user2.name = 'peterCloned'
console.log(user);

// old way 구식
// user3을 for in 문을 이용해 하나씩 value들을 삽입한다.
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);
// user3.name을 바꿔도 user.name에는 변함이 없는 것을 볼 수 있다.
user3.name = 'peterCloned3';
console.log(user);

// new way
// Object.assign을 이용해 값을 옮겨온다.
// way 1
const user4 = {};
Object.assign(user4, user);
// way2
const user5 = Object.assign({}, user);
console.log(user4);
console.log(user5);
user4.name = 'peterCloned4';
console.log(user);

// another example
// Object assign을 한 Object만 아님 2 or more Object를 같이 assign 할 수 있다.
// 하지만 key가 겹칠 경우 젤 나중 즉 젤 오른쪽에 있는 Object의 key를 save한다. (덮어쓰기가 됨) 
const fruit1 = {
    color: 'red'
};
const fruit2 = {
    color: 'blue',
    size: 'big'
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);