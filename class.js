'use strict';
// Object-oriented Programming
// class: template
// object: instance of class
// Javascript class
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. class declaration
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const peter = new Person('peter', 20);
console.log(peter.name);
console.log(peter.age);
peter.speak();

// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(val) {
        this._age = val < 0 ? 0 : val;
    }
}
const user1 = new User('bob','tomey',-43);
console.log(user1.age);

// 3. Fields(public, private)
// Too Soon! 생긴지 얼마안 됨 최신브라우저도 지원 안 되는 브라우저가 많음
class Experiment{
    publicField = 2;
    // 변수 앞에 #을 붙여주면 Private field로 전환
    #privateField = 19;
}
const experiment = new Experiment();
console.log(experiment.publicField); 
console.log(experiment.privateField);

// 4. Static properties and methods
// Too Soon!
// Object에 상관없이 공통으로 class에서 사용되는것을 static 사용
// 메모리 할당에도 좋음
class Article{
    static publisher = "1st hahaha";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
//article1.publisher는 접근 불가
console.log(article1.publisher);
// static이므로 class이름으로 접근해야함 
// Article.publisher로 접근해야함
console.log(Article.publisher);
// Methods도 같음
// class로 만든 object인 article1.printPublisher() 접근 불가
// article1.printPublisher();
// class자체인 Article.printPublisher()로 접근해야함
Article.printPublisher();

// 5. Inheritance
// a way of for one class to extend another class
class Shape{
    constructor (width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    }
    getArea(){
        return this.width * this.height;
    }
}

// 새로운 class에서 extends를 하면 Shape의 constructor & methods를 가져온다.
class Rectangle extends Shape{}

const rectangle1 = new Rectangle(20,40,'blue');
rectangle1.draw();
console.log(rectangle1.getArea());

class Triangle extends Shape{
    // 같은 methods를 재정의 해줄 수 있다. 
    // 재정의를 하면 extends한 class의 methods를 덥어씌기하므로 extends한 class의 methods는 지워진다.
    // super를 쓰면 extends된 class methods도 불러오면서 새로운 methods도 같이 사용된다.
    draw(){
        super.draw();
        console.log('triangle');
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}

const triangle1 = new Triangle(20,40,'red');
triangle1.draw();
console.log(triangle1.getArea());

// 6. class checking - instance of
console.log(rectangle1 instanceof Rectangle);
console.log(triangle1 instanceof Rectangle);
console.log(triangle1 instanceof Triangle);
console.log(triangle1 instanceof Shape);
console.log(triangle1 instanceof Object);

