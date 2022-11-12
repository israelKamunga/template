let clicked = false;
let toggler = document.getElementById("navbar-toggler");
toggler.addEventListener("click",()=>{
    if(!clicked){
        document.getElementById("nav").style.background = "#343a40";
        clicked = true;
    }else if(window.scrollY>343){
        document.getElementById("nav").style.background = "#343a40";
        clicked = false;
    }else{
        document.getElementById("nav").style.background = "transparent";
        clicked = false;
    }
})
window.addEventListener("scroll",()=>{
    if(window.scrollY>343){
        document.getElementById("nav").style.background = "#343a40";
        document.getElementById("nav").style.color = "white";
    }else{
        document.getElementById("nav").style.background = "transparent";
    }
})