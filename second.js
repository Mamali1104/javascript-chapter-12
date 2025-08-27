// let btn = document.querySelector("button");

let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async() => {
//     let link = await getImage();
    
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);



    

// });


async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
        // return responss.data.fact;
    }
    catch (e) {
        console.log("ERROR -", e );
        return "/";
    }
    
}

let url = "https://icanhazdadjoke.com/";

async function getjokes() {
    try {
        const config = { headers: {Accept: "application/json"} };
        let response = await axios.get(url, config);
        console.log(response.data);

    }
    catch (err) {
        console.log(err);
    }
    
}

let url3 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);


    let colArr = await getCollege(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = " ";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText =col.name;
        list.appendChild(li);
    }
}



async function getCollege(country) {
    try {
        let rsp = await axios.get(url3 + country);
        return rsp.data;
    }
    catch(e) {
        console.log("error: ", e);
        return [ ];
    }
    
}
