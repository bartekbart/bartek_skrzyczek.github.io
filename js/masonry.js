window.onload = function() {

  go();
  window.addEventListener('resize', go);

  function go(){
    //let entireSpace = document.getElementsByClassName("featured-projects-block__item")[1].offsetHeight;
    //let cardHeight = document.getElementsByClassName("content")[1].offsetHeight;
    let margin = entireSpace - cardHeight;
    //let container = document.getElementsByClassName("featured-projects-block__item")[3];
    //let container2 = document.getElementsByClassName("featured-projects-block__item")[4];

    let card0 = document.getElementsByClassName("content")[0].offsetHeight;
    let card1 = document.getElementsByClassName("content")[1].offsetHeight;
    let card2 = document.getElementsByClassName("content")[2].offsetHeight;
    let card3 = document.getElementsByClassName("content")[3].offsetHeight;
    let card4 = document.getElementsByClassName("content")[4].offsetHeight;

    let leftColumnHeight = card0 + card2;
    let RightColumnHeight = card1 + card3;
    let mT = leftColumnHeight - RightColumnHeight;
    console.log(document.documentElement.clientWidth);
    console.log(leftColumnHeight);
    console.log(mT);
    container.style.marginTop = ( - margin + "px" );
    if(document.documentElement.clientWidth > 623) {
      container2.style.marginTop = ( - (leftColumnHeight - RightColumnHeight) - 30 + "px" );
    } else {
      container2.style.marginTop = 0;
    }
  };

  var addEvent = function(object, type, callback) {
      if (object == null || typeof(object) == 'undefined') return;
      if (object.addEventListener) {
          object.addEventListener(type, callback, false);
      } else if (object.attachEvent) {
          object.attachEvent("on" + type, callback);
      } else {
          object["on"+type] = callback;
      }
  };

  addEvent(window, "resize", function(event) {
    console.log('resized');

    let entireSpace = document.getElementsByClassName("featured-projects-block__item")[1].offsetHeight;
    let cardHeight = document.getElementsByClassName("content")[1].offsetHeight;
    let margin = entireSpace - cardHeight;
    let container = document.getElementsByClassName("featured-projects-block__item")[3];

    container.style.marginTop = ( - margin + "px" );

  });
};
