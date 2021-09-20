window.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll("input");
  var tipOptions = document.querySelectorAll(".tip-option");
  var billInput = document.querySelector(".billInput");
  var tipInput = document.querySelector(".tip-input");
  var pplInput = document.querySelector(".pplInput");
  var totalOutput = document.querySelector(".total-ready");
  var tipOutput = document.querySelector(".tip-ready");
  // var warning = document.querySelector('.warning');

  let tip = 0;
  tipOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      var prcntVal = option.getAttribute("val");
      tip = parseInt(prcntVal);
      tipInput.value = 0;
    });
  });

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var bill = parseInt(billInput.value);
      var customTip = parseInt(tipInput.value);
      var ppl = parseInt(pplInput.value);
      var total = bill / ppl;
      var tipValue = bill * (tip / 100);
      var customTipValue = bill * (customTip / 100);
      var tipPPerson = parseFloat(tipValue / ppl);
      var customTipPPerson = parseFloat(customTipValue / ppl);

      if (
        ppl > 0 &&
        isNaN(total) == false &&
        total != 0 &&
        bill != 0 &&
        bill > 0
      ) {
        totalOutput.innerHTML = total.toFixed(2);
      } else {
        totalOutput.innerHTML = " ";
      }

      if (tip == 0 || tip < 0 || isNaN(tip) == true) {
        tipOutput.innerHTML = customTipPPerson.toFixed(2);
      }
      else if(customTip == 0 || customTip < 0 || isNaN(customTip) == true){
          tipOutput.innerHTML = tipPPerson.toFixed(2);
      }
      else{
          tipOutput.innerHTML = " ";
      }
    });
  });
});
