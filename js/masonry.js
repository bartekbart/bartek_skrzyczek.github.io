window.onload = function() {

  go();
  window.addEventListener('resize', go);

  function go(){
    let entireSpace = document.getElementsByClassName("featured-projects-block__item")[0].offsetHeight;
    let cardHeight = document.getElementsByClassName("content")[0].offsetHeight;

    var margin = entireSpace - cardHeight;
    let container = document.getElementsByClassName("featured-projects-block__item")[2];

    container.style.marginTop = ( - margin + "px" );
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

    let entireSpace = document.getElementsByClassName("featured-projects-block__item")[0].offsetHeight;
    let cardHeight = document.getElementsByClassName("content")[0].offsetHeight;
    var margin = entireSpace - cardHeight;
    let container = document.getElementsByClassName("featured-projects-block__item")[2];

    container.style.marginTop = ( - margin + "px" );

  });
};
