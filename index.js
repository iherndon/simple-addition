var result = document.querySelector('#result');
var calcButton = document.querySelector('#calc-button');
calcButton.addEventListener('click', renderResult);

renderResult();

function renderResult () {
  var first = document.querySelector('input[name="first"]');
  var second = document.querySelector('input[name="second"]');
  var sum = parseInt(first.value, 10) + parseInt(second.value, 10)
  result.innerHTML = sum || 0;
}


