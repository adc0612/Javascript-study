'use strict';

// async & await
// clear style of using promise

// 1. async
// 보통 fetchUser 같은 백앤드 서버에서 데이터를 가져오는 것은 시간이 걸린가.
// javascript는 동기적 언어기 때문에 순차적으로 실행된다.
// 그래서 fetchuser function을 만나면 10초동안 기다리고 다른것이 실행 되야하므로 비동기 처리를 해줘야 된다.
// 하지 않으면 불러오는 10초동안 page에는 아무것도 나타나지 않는다.
function fetchUser() {
    // do network request in 10 secs...
    return new Promise((resolve, reject) => {
        // Promise안에 resolve나 reject를 선언 하지 않을시 이 Promise는 계속 Pending에 머무른다.
        resolve('person');
    });
}
// async로 작성
// Promise를 따로 안에 쓸필요 없이 function 앞에 async 붙여주면 자동으로 promise가 적용된다.
async function fetchUserAsync() {
    return 'person Async';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

const userA = fetchUserAsync();
userA.then(console.log);
console.log(userA);

// 2. await
// async가 붙은 함수 내에서만 사용가능
// async에서 Promise를 반환할 때 까지 기다려준다.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

// function getBanana() {
//     return delay(1000)
//         .then(() => '🍌');
// }

async function getBanana() {
    await delay(1000);
    // throw Error;
    return '🍌';
}

// 이렇게 Promise를 중첩해서 쓰면 코드 가독성이 떨어진다.
// function pickFruits() {
//     return getApple()
//         .then((apple) => {
//             return getBanana()
//                 .then((banana) => `${apple} + ${banana}`);
//         });
// }

// try catch로 error잡을 수 있다.
// 아래 처럼 실행하면 1초 기다린 뒤 또 1초를 기다려야 한다.
// async function pickFruits(){
//     try{
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple} + ${banana}`;
//     }catch(error){
//         console.log(error);
//     }
// }

//변수를 이용해 async function을 먼저 선언하면 Promise를 받아올 수 있다.
// 두 Promise는 연관성이 없는 async function이므로 1초후 1초 안 기다려도 되고 동시에 받아 올 수 있다. 
async function pickFruits() {
    try {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    } catch (error) {
        console.log(error);
    }
}
pickFruits().then(console.log);

// 3. useful Promise APIs
// Promise.all 은 위에와 같이 동시에 받아온다.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

// Promise.race는 loading속도가 제일 빠른것을 하나 골라서 전달한다.
function pickOnlyOne() {
    return Promise.race ([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);