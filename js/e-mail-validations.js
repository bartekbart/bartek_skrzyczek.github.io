const name = document.querySelector("form#someForm #name");
const email = document.querySelector("form#someForm #email");
const comment = document.querySelector("form#someForm #comments");
const textarea = document.querySelectorAll('form input, form textarea');
console.log(textarea);

function updateCSSClass(a, b) {

}

function checkfnlname(field) {
  curr = document.getElementById(field).value;
  if (curr.length > 0) {
    updateCSSClass(field, 1);
    return true;
  } else {
    updateCSSClass(field, 0);
    return false;
  }
}

window.onload = function () {
  // disable submit
  document.getElementById('email-button').setAttribute('disabled', 'disabled');
  [].slice.call(document.querySelectorAll('form input, form textarea')).forEach(function(element, index) {
    element.addEventListener('keyup', function(e){
      let invalidFields = [].slice.call(document.querySelectorAll('form input, form textarea')).filter(function(element, index) {
        return !checkfnlname(element.id);
      });
      if (invalidFields.length == 0) {
        // reenable the submit if n. of invalid inputs is 0
        document.getElementById('email-button').removeAttribute('disabled');
      } else {
        document.getElementById('email-button').setAttribute('disabled', 'disabled');
      }
    }, false);
  });
}

function empty() {
  var x;
  x = document.getElementById("roll-input").value;
  if (x == "") {
    alert("Enter a Valid Roll Number");
    return false;
  };
}
