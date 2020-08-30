'use strict';

// Promise is a JavaScript object for asynchromous operation.
// State: pending -> Fulfilled or rejected
// Producer VS Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
// Promise가 생성될 때 마다 자동으로 executer 콜백함수가 바로 실행
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('Person');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumer: then, catch, finally
// then: Promise가 정상적으로 수행이 되어서 resolve라는 콜백함수를 통해 전달한 값이 담긴다.
// catch: Promise가 수행되다가 error 발생됐을시 reject라는 콜백함수를 통해 전달한 값이 담긴다.
// finally: Promise 수행에 성공과 error 구분 없이 마지막에 무조건 실행 되는 것
promise.then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise Chaining
// 계속 then 을 붙여 수행할 수 있다.
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
//아래는 좀더 코드를 간편하게 작성
// 콜백 함수를 작성 할 때 받아오는 인자 하나를 바로 전달 할 때는 생략 가능
// then에서 받아오는 인자를 함수에 바로 넣어준다.
getHen() //
    .then(getEgg)
    // getEgg에서 에러가 날 시 조치하는 catch 문항
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    // error catch (error handling)
    .catch(console.log);