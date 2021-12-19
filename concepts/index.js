import { from, map } from "rxjs";

const numbers = from([1, 2, 3, 4, 5]);
numbers.subscribe(console.log);

const multipliedNumbers = numbers.pipe(map((num) => num * 10));
multipliedNumbers.subscribe(console.log);
