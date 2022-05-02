
// Use Import export (MANDATORY)
import navbar from "../components/navbar.js"
import { searchInput , display} from "./common.js";
document.getElementById("navbar").innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.querySelectorAll("#sidebar>div").forEach((el)=>{
    el.addEventListener("click", async (event)=>{
       // console.log(el.id)
       const cdata = await getCountry(el.id)
       display(cdata);
        })
})

let search = document.getElementById("search_input");
search.addEventListener("keyup", async (event)=>{

    console.log("event trigered",event.keyCode)
    if(event.keyCode == 13){
     let data = await searchInput(search.value)
    console.log("data:",data)
localStorage.setItem("searchResult", JSON.stringify(data))
        let value ="./search.html";
      console.log(value);
      window.location.href = value;
         
    }
});
//console.log(search);
//searchInput()


async function getCountry(cCode) {
    try{
        let url= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cCode}`)
        let data = await url.json();
       return data;
               }
        catch(err){
           // console.log(err)
        }
        
}
 



