// true
console.log(true == 1);
console.log(true == "1");
console.log(true == [1]);
// false
console.log(false == 0);
console.log(false == "0");
console.log(false == "");
console.log(false == []);
console.log(false == [[]]);
console.log(false == [0]);
// 1
console.log(1 == "1");
console.log(1 == [1]);
// 0
console.log(0 == "0");
console.log(0 == "");
console.log(0 == []);
console.log(0 == [[]]);
console.log(0 == [0]);
// -1
console.log(-1 == "-1");
// "1"
console.log("1" == [1]);
// "0"
console.log("0" == [0]);
// ""
console.log("" == []);
console.log("" == [[]]);