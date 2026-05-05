//MAP method

let numbers = [1,4 ,9 ,16];

let result = numbers.map(numbers => Math.sqrt(numbers));

console.log(numbers);
console.log(result);

let multi = numbers.map(numbers =>numbers * numbers);

console.log(multi);
function div(numbers)
{
    return numbers / 5
}
let divresult = numbers.map(div);
console.log(divresult);

let divi = numbers.map(numbers => numbers*10);
console.log(divi);

//filter method

let age =[50,60,12,80,15]

let agelimt = age.filter(age =>
{
    if ( age <18){
        return true;
    }

    else {
        return false;
    }
}
);
console.log(agelimt);
