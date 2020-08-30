'use strict';
// Callback hell Sample
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'person1' && password === 'pass1') ||
                    (id === 'person2' && password === 'pass2')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'person1') {
                    resolve({
                        name: 'person1',
                        role: 'admin'
                    });
                } else {
                    reject(new Error('no access'));
                }
            })
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter your password');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);