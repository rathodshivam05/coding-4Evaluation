// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

import { searchInput , display} from "./common.js";
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let searchData = JSON.parse(localStorage.getItem("searchResult"))
console.log(searchData)
display(searchData)

let search = document.getElementById("search_input");
search.addEventListener("keyup", async (event)=>{

    console.log("event trigered",event.keyCode)
    if(event.keyCode == 13){
     let data = await searchInput(search.value)
    console.log("data:",data)
    display(data)
     //let result = document.getElementById("results").append(data)
            
    }
});


