export let example!: string | number[];

const setToArray = () => example = [1];
setToArray();

if (typeof example == 'string' && example == '1') {
  console.log('oops');
} else {
  console.log('safe');
}