'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting
// hoisting: var, function declaration
// Synchronous: 정해진 순서에 따라 순서대로 작동하는것
// Asynchronous: 비동기적으로 언제 코드가 실행 될지 모르는 것 Ex: setTimeout Api
console.log(1); //Synchrous 동기
// setTimeout 안의 든 Function들이 Callback Function
setTimeout(() => console.log(2), 1000); //Asynchronous 비동기
console.log(3); //Synchrous 동기

// Synchronous callback
function printImmediately(print) { //Synchronous 동기
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) { //Asynchronous 비동기
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback hell Sample
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'person1' && password === 'pass1') ||
                (id === 'person2' && password === 'pass2')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'person1') {
                onSuccess({
                    name: 'person1',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(id, password, user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);