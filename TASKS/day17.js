//today revice about strings in JS

//ex 1
//add method ,in this orginal sting can be change

// let a = "rithanya";
// let b = "santhosh";

// let c = a + b ;
// console.log(c);

// let d = "san" + a.slice(1)
// console.log(d);

//ex2

let userdata = " santhosh , SAVVG@gamil.com , i iam santhosh .welcome to my revice learnin sec";

//SPILT THE DATA
let data = userdata.split(",");
// console.log(data);
 
// TRIM THE DATA
let name = data[0].trim();
let email = data[1].trim();
let reponse = data[2].trim();
// console.log(name);
// console.log(email);
// console.log(reponse);

// CSAE CONVERSATION
name=name.toUpperCase();
// console.log(name);

email = email.toLowerCase();
// console.log(email);

// includes ,it helps to find the word we want , its respone throug true or false

let word = reponse.includes("welcome")
// console.log(word);

//slice 
let reponse2 = reponse.slice(12)
// console.log(reponse2);

//replce the word

reponse = reponse.replace("welcome", "greet");
// console.log(reponse);

//lastindexof it helps find the index and its same for indexof

let lastind = reponse.lastIndexOf();
// console.log(lastind);

//length , its not a fun() it a proprites ,its helps find the index value
let findlen = reponse.length ;
// console.log(findlen);

// endswith and startwith meth

let endsstarts = email.includes("@") && email.endsWith("com");
// console.log(endsstarts);

// now we create a form 
let de = "-".repeat(50);
console.log(de);

let names = `${name}`;
let emails = `${email}`;
let res = `${reponse}`;

console.log(names);
console.log(emails);
console.log(res);

console.log(de);




