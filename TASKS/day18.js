// // today i revised the topics are synchronou and asychoronous

// //ex code for synchoronous

// function task1()
// {
//     console.log("task1 is starting");

//     let start = Date.now();
//     let delay = 5000;
//     let end = start + delay ;

//     console.log("task1 is executing");

//     while(Date.now() <= end)
//     {

//     }
//     console.log("task1 is completed")


// }

// function task2()
// {
//     console.log("task2 is starting");

//     let start = Date.now();
//     let delay = 6000;
//     let end = start + delay ;

//     console.log("task2 is executing");

//     while(Date.now() <= end)
//     {

//     }
//     console.log("task2 is completed")


// }

// task1();
// task2();

//while one task is executing the another task need to wait ,because the 
//JS in synchoronous programming..

//ex 2 for asynchoronous
// function task1()
// {
//     console.log("task1 is starting");
 
    
//     console.log("task1 is completed")


// }

// function task2()
// {
//     console.log("task2 is starting");

//     let start = Date.now();
//     let delay = 5000;
//     let end = start + delay ;

//     console.log("task2 is executing");

//     while(Date.now() <= end)
//     {

//     }
//     console.log("task2 is completed")


// }

// function task3()
// {
//     console.log("task3 is starting");

    
//     console.log("task3 is completed")


// }

// //using settimeout function,we can prevent the synchoronous

// task1();
// //using settimeout with call function
// setTimeout(task2,2000);
// task3();

// this is the wAay to prevent

//using another function called setinterval()
 
function task1()
{
    console.log("task1 is starting");
 
    
    console.log("task1 is completed");
}

let intervalid = setInterval(task1,2000);

setTimeout(()=> clearInterval(intervalid),10000);
