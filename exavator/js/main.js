let mybutton = document.getElementById("backToTop");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
/************************************* */
// let more = document.getElementById("more2");
// let more_two = more.onclick
// if (more.onclick) {
//     document.getElementById("carousel").style.display = "none";

// }

// function myFunction() {

//     let mobile = document.getElementById('mobileOf').style.display = "none";
//     let mobileOn = document.getElementById('mobileOn').style.display = "block";
// }