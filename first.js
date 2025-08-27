// async function greet() {
//     // throw"weak connection ";
//     return("hello");
// }
// // greet();
// greet() 
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was :",result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err: ", err);
// })

// let demo = async () => {
//     return 5 ;
// }


// function getNum() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function displayfnx(params) {
//     await getNum();             //await function
//     await getNum();
//     await getNum();
// }

// let h1 = document.querySelector("h1");


// function changeColor(color,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let no = Math.floor(Math.random() * 5) + 1;     // error can be occured
//             if(no > 4) {
//                 reject("promise was reject");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");
            
//         }, delay);
//     });
// }

// async function disfnx() {
//     try {                                   //chance of occuring of an error
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("blue",1000);
//         await changeColor("purple",1000);
//         await changeColor("yellow",1000);
//         await changeColor("green",1000);

//     } catch (err) {
//         console.log("error was caugth!");
//         console.log(err);
//     }

//     let a = 4;                              //it doesn't concern of the above code cause it has created after color change code..
//     console.log(a);
//     console.log("value of a is:", a + 5);



// }
// disfnx();

let jsonRes = '{"fact":"Approxmately 1/3 of cats are able to read thier owners mind.","length : 77"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);   


let student = {
    name:"mama",
    age:20,
    marks:90
};

let url = "https://catfact.ninja/fact";
fetch(url)
   .then((res) => {
    return res.json();
    })
    .then((data) => {
        console.log("data1=",data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 =",data2.fact);
    })
   .catch((err) => {
    console.log("ERROR - ",err);
    });

async function getFacts() {
    try {

        let response = await fetch(url);
        let data3 = await response.json();
        console.log(data3.fact);

        let response2 = await fetch(url);
        let data4 = await response2.json();
        console.log(data4.fact);

    
    } catch(e) {
        console.log("error - ",e);
    }
    
    con.log("hyy");
}   






let btn = document.querySelector("button");
btn.addEventListener("click",async() => {
    let fact =  await retFact();
    console.log("button was clicked");
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

async function retFact() {
    try {
        let responss = await axios.get(url);
        return responss.data.fact;
    }
    catch (e) {
        console.log("ERROR -",e);
        return "NO FACTS FOUND";
    }
    
}