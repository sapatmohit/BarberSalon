// // // //preloader// // // //

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

// // // //menu btn// // // //

var x = document.getElementById('menu-btn')
var y = document.getElementById('sideNav')
var z = document.getElementById('menu')

y.style.right = "-250px";

x.onclick = function () {
    if (y.style.right == "-250px") {
        y.style.right = '0';
        z.src = "img/close.png";
    } else {
        y.style.right = '-250px';
        z.src = "img/menu.png";
    }
}

// // // // popup form // // // //

document.querySelector("#book").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".popup .btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});