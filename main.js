window.addEventListener("DOMContentLoaded", function () {
  var billInput = document.querySelector(".billInput");
  var pplInput = document.querySelector(".pplInput");
  var tipInput = document.querySelector(".tipInput");
  var tipOptions = document.querySelectorAll(".tip-option");

  var answer = "";
  var totalResult = 0;
  var tipResult = 0;
  let x = 0;

  function getValue(e, warnignType) {
    value = e.value;
    if (value != 0 && value > 0 && isNaN(value) == false) {
      answer = parseInt(value);
    } else {
      answer = "Enter correct " + warnignType + " value";
    }
    return answer;
  }

  getValue(billInput, "bill");
  var bill = answer;

  getValue(pplInput, "people");
  var ppl = answer;

  function getTotal(a, b) {
    totalResult = a / b;
    if (totalResult != 0 && totalResult > 0 && isNaN(totalResult) == false) {
      return totalResult;
    }
    else totalResult = 0;
  }

  function getTip() {
    tipOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        x = parseInt(option.getAttribute('val'));
        return x;
      });
    });
    x = x
    y = parseInt(tipInput.value);
    if (y != 0 && y > 0 && isNaN(y) == false) {
      tipResult = y;
    } else if (x != 0 && x > 0 && isNaN(x) == false) {
      tipResult = x;
    }
    return tipResult;
  }

  getTotal(bill, ppl);
  var total = totalResult.toFixed(2);

  console.log(bill);
  console.log(ppl);
  console.log(total);
  getTip();
  var theTip = tipResult;
  console.log(theTip);
});
