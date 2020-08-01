'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // join: 괄호안에는 구분자를 넣어줄 수도 있고 안 넣어도 된다
    // 구분자를 안 넣으면 ','가 자동으로 들어가고 아니면 구분자로 배열안에 item들이 구분되어 나타난다.
    const result = fruits.join(' and ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split: string에 적용되는 api로 구분자를 전달해 string을 배열로 넣어준다.
    // 두번째 인자는 option이다 넣지 않으면 string 모두를 바꿔주고, 
    // 두번째 인자에 숫자를 전달하면 전달한 만큼의 array가 생성되고 값이 들어간다.
    // 위 string을 배열을 바꿀시 총 4인 size의 배열이 생성되는데 
    // 두번째 인자값을 2로 줄 시 size가 2인 배열이 생성되며 2개의 인자만 들어간다.
    const result = fruits.split(', ');
    console.log(result);
    const result2 = fruits.split(', ',2);
    console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // result: 배열안의 item들을 reverse해준다.
    // array 자체의 item들도 reverse 해준다.
    // result, array 둘다 안에 item들이 reverse 되어있다.
    const result = array.reverse();
    console.log(array);
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // splice: 배열안의 item들은 전달된 index와 길이 만큼 삭제해서 return한다.
    // 그 결과 array안에는 삭제되지 않은 [1,2]가 들어있고 result에는 삭제된 [3,4,5]가 들어있다.
    // splice는 array 자체를 변경시킨다.

    // slice: 배열안의 start(첫번째 인자)index 부터 end(두번째 인자)index까지 item들을 반환한다.
    // 그 결과 result2는 array배열의 2번째부터 5번째 까지의 값들이 들어있다. 그래서 안에 들어있는 배열은 [3,4,5] 
    // *** end index의 item은 배제 되므로 해야하는 end index 값의 +1 해서 end값을 정한다.
    const result2 = array.slice(2,5);
    console.log(array);
    console.log(result2);
    const result = array.splice(2,3);
    console.log(array);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // find: 인자로 함수를 전달하고 함수조건에 맞는 요소를 찾으면 그 값을 반환하고 아니면 false를 반환한다.
    // const result = students.find((student, index) => console.log(student,index));
    const result = students.find((student) => student.score ===90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    // filter: 인자로 함수를 전달하고 함수조건에 맞는 요소를 찾아서 Array안에 넣어주고 Array를 반환한다.
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //map: 인자로 함수를 전달하고 함수에서 원하는 값들을 mapping해서 새로운 array로 반환 
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
