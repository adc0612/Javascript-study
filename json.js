// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol 같은 Javascript 자체에 들어있는 특별한 값은 JSON으로 변환이 안됨
    // symbol: Symbol('id'),
    // 함수도 마찬가지로 JSON으로 변환 안됨
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json);

// strigify 두번째 인자로 key 배열을 넣으면 해당 key만 json에 담긴다.
json = JSON.stringify(rabbit, ['name','color','size']);
console.log(json);

// strigify 두번째 인자로 callback함수를 넣으면 해당되는 조건에 드는 object만 json에 담긴다.
json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'elsa' : value;
});
console.log(json);
 

// 2. JSON to object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
// rabbit에는 jump function이 있었지만 JSON으로 변환하면서 function이 들어오지 않았고
// 그 결과 obj는 rabbit을 json으로 바꾸고 난 것을 다시 변환하면서 jump function은 없다.
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// rabbit에는 date가져오는 getDate function이 있었지만 JSON으로 변환하면서 function이 string으로 변환해서 담겼고
// 그 결과 obj의 getDate는 json의 string으로 된 값이기 떄문에 getDate함수가 없다.
// console.log(obj.birthDate.getDate());
// 가져오려면 function을 재 설정해준다.
console.log(obj.birthDate.getDate());