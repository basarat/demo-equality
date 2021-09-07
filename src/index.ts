console.log(null == null); // true
console.log(undefined == null); // true

let example: string | null | undefined;
const setExampleString = () => example = 'hello';
const setExampleNull = () => example = null;
const setExampleUndefined = () => example = undefined;

setExampleString(); console.log(example?.toUpperCase()); // HELLO
setExampleUndefined(); console.log(example?.toUpperCase()); // undefined
setExampleNull(); console.log(example?.toUpperCase()); // undefined

console.log(example?.toUpperCase());
console.log(example == null ? undefined : example.toUpperCase());