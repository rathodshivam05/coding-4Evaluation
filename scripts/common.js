let  searchInput = async(searchTerms) =>{
    try{
    let url= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${searchTerms}`)
    let data = await url.json();
    console.log("data:", data)
   return data;

    
    }
    catch(err){
       // console.log(err)
    }
    }


    function display(data){
        let result = document.getElementById("results")
        result.innerHTML = "";
       data.articles.forEach((el)=>{
    
        let img= document.createElement("img")
        img.src = el.urlToImage;

      let p =document.createElement("p");
      p.innerText = el.description;
      console.log(el.description)
      p.className = "heading"

      let p2 =document.createElement("p");
      p2.innerText = el.title;
       p2.className = "subHeading"
      let div = document.createElement("div")
      div.setAttribute("class", "dataRow")
      let textDiv = document.createElement("div")
      textDiv.append(p,p2)
      textDiv.className = "divText"
      div.append(img, textDiv)
    result.append(div)
       })
    }


    export {searchInput,display}