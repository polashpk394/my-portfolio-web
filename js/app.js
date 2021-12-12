const menu = document.querySelector("#menu_bar");
const header = document.querySelector("header");

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});

window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
});

/*
window.onscroll = () =>{
    console.log("working")
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
*/