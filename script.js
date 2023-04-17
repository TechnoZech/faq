//selectors

let icon = document.querySelector(".icon");
let content = document.querySelector(".content");

//event listeners

icon.addEventListener("click", toggleContent);


//functions

function toggleContent(e){
    content.classList.toggle("hide");
    if(content.classList.contains("hide")){
        icon.innerHTML = "+";
    }else{
        icon.innerHTML = "x";
    }
}