function changeTag(evt, field) {
  let i, x, tablinks;
  x = document.getElementsByClassName("tab-content");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-header");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }
  document.getElementById(field).style.display = "grid";
  evt.currentTarget.className += " tab-active";
}

let articles = document.getElementsByClassName("tab-content");
articles[0].style.display = "grid";



let buttons = document.getElementsByClassName("tab-header");
let smoke = document.getElementsByClassName("smoke");

let factory = document.querySelectorAll(".factory");
let band    = document.querySelectorAll(".band ul li");
let myArray = Array.from(band);
let robot   = document.querySelectorAll(".robot");

buttons[0].addEventListener("click", function() {
  console.log(smoke);
  smoke[0].classList.add("smoke-active");
  robot[0].classList.remove("robot-active");
  factory[0].classList.add("element-activated");
  setTimeout(function(){
    factory[0].classList.remove("element-activated");
  }, 300);
  for(let i=0; i<myArray.length; i++) {
    myArray[i].classList.remove("li-animate");
  }
})

buttons[1].addEventListener("click", function() {
  smoke[0].classList.remove("smoke-active");
  robot[0].classList.remove("robot-active");
  factory[1].classList.add("element-activated");
  setTimeout(function(){
    factory[1].classList.remove("element-activated");
  }, 300);
  for(let i=0; i<myArray.length; i++) {
    myArray[i].classList.add("li-animate");
  }
})

buttons[2].addEventListener("click", function() {
  smoke[0].classList.remove("smoke-active");
  robot[0].classList.add("robot-active");
  robot[0].classList.add("element-activated");
  setTimeout(function(){
    robot[0].classList.remove("element-activated");
  }, 300);
  for(let i=0; i<myArray.length; i++) {
    myArray[i].classList.remove("li-animate");
  }
})
