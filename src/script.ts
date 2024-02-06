// Task 1
const getting:string = "Hello, TypeScript!";
console.log(getting);

// Task 2
function mult(x:number, y:number):number{
    return x * y;
}
console.log(mult(2, 10));

// Task 3
function isEven(a:number):boolean{
    return a % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));

// Task 4
interface Person {
    name: string;
    age: number;
  }
  
  function greetUser(person: Person): string {
    return `Hello, ${person.name}!`;
  }
  
  let user = { name: 'Tatyana', age: 35 };
  console.log(greetUser(user));

// Task 5
function filterPositiveNumbers(numbers:number[]):number[]{
    return numbers.filter(num => num > 0);
}
console.log(filterPositiveNumbers([1, -5, 2, 10, -3, -7, 7]));


