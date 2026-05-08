//today i learn about shallow and deep copy
//sallow copy 

//ex1

let a1 =[10,20,30,40]
console.log(a1);

let a2 = [...a1]
console.log(a2);

a1.push(50);
console.log(a1)

//ex2

let sets = [[15,13],[10,20]];
console.log(sets);

let sets2 = sets.slice();
console.log(sets2);

sets[0].push(500);
console.log(sets);

console.log(sets2);

// shallow copy have two methods they are, sperard opp and slice method.

// deepcopy

// ex1

let ar1= [[10,50],[55,30]];
console.log(ar1);

let ar2 = structuredClone(ar1);
console.log(ar2);

ar1[0].push(800);
console.log(ar1);
console.log(ar2);

//ex 2

let na = [{name:" sandy"},{name : "ritdhu"}];
console.log(na);

let na2 = structuredClone(na);
console.log(na2);

na[1].name = "rithanya";
console.log(na);
console.log(na2);

//deep copy helps to whem we change the default array, strcutureclone() method 
//prevend to not affect the new copied arrays
