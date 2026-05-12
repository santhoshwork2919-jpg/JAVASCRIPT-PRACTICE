// to i learn deeply on async / await and how its work with promoise 
// example code for this

function step1()
{
    return new Promise((resolve,reject)=>{
        console.log("step1 was started");

        setTimeout(() => {
            console.log("step1 was completed");
            resolve();
            
        }, 3000);
    });
};

function step2()
{
    return new Promise((resolve,reject)=>{
        console.log("step2 was started");

        setTimeout(() => {
            console.log("step2 was completed")
            resolve();
            
        }, 3000);

    })
};

function step3()
{
    return new Promise((resolve,reject)=>{
        console.log("step3 was started");

        setTimeout(()=>{
            console.log("step3 was failed");
            reject();
        },3000);
    })
}

//this is how async and await work

// async function run(){

//     try{
//     await step1();
//     await step2();
//     await step3();
//     }

//     catch(error){
//      console.log("step 3 was a failuer")
//     }
    
// }

// run();

//and we can run a function without created a function like aysnc ...

//example for that we just not create like previous one just create
//directly like this>


    try{
    await step1();
    await step2();
    await step3();
    }

    catch(error){
     console.log("step 3 was a failuer")
    }
   


