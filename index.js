/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function onFunction() {
    console.log("Hello World");
    var x = document.getElementById("Links");
    var y = document.getElementById("icon");
    if (x.style.display === "block" || x.style.display === "flex") {
        x.classList.remove("myStyle")
        y.innerHTML = '<i class="fa fa-bars" style="font-size: 3rem;"></i>'
        x.style.display = "none";
    } else {
        x.classList.add("myStyle");
        y.innerHTML = '<i class="fa fa-times" style="font-size: 3rem; color: aliceblue;" aria-hidden="true"></i>';
        x.style.display = "block";
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.justifyContent = "center";
        x.style.alignItems = "center";
        x.style.height = "100vh";
        x.style.width = "100vw";
    }
}

var x = document.getElementById("Links");


function clickHandler () {
    console.log("Clicked!!");
    var x = document.getElementById("Links");
    var y = document.getElementById("icon");
    
    if (x.classList.contains("myStyle")) {
        console.log("Clicked IF CONDITION!");
        x.classList.remove("myStyle")
        y.innerHTML = '<i class="fa fa-bars" style="font-size: 3rem;"></i>'
        x.style.display = "none";
        x.position = "fixed";
        x.left = 0;
        x.width = "20%";
    }
}
