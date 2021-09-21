window.addEventListener("DOMContentLoaded", function () {
  var billInput = document.querySelector(".billInput");
  var pplInput = document.querySelector(".pplInput");
  var tipInput = document.querySelector(".tipInput");
  var resetButton = document.querySelector(".reset");
  var billWarning = document.querySelector(".bill-warn");
  var pplWarning = document.querySelector(".ppl-warn");

  var tipOptions = document.querySelectorAll(".tip-option");
  var inputs = document.querySelectorAll("input");

  var tipOutput = document.querySelector(".tip-ready");
  var totalOutput = document.querySelector(".total-ready");

  var answer = "";
  var totalResult = 0;
  var tipResult = 0;

  function getValue(e, name) {
    value = e.value;
    if (value != 0 && value > 0 && isNaN(value) == false) {
      answer = value;
    } else {
      answer = "w";
    }
    return answer;
  }

  function getTotal(a, b) {
    totalResult = a / b;
    if (totalResult != 0 && totalResult > 0 && isNaN(totalResult) == false) {
      return totalResult;
    } else {
      totalResult = 0;
    }
  }

  function getTip(z, x) {
    if (x != 0 && x > 0 && isNaN(x) == false) {
      tipResult = x;
    } else {
      tipResult = 0;
    }
    SplittedTip = z * (tipResult / 100);
    if (SplittedTip != 0 && SplittedTip > 0 && isNaN(SplittedTip) == false) {
      return SplittedTip;
    } else {
      SplittedTip = 0;
      return SplittedTip;
    }
  }

  function calculation(tipOption) {
    getValue(billInput, "bill");
    bill = parseFloat(answer);
    if (bill == "w") {
      billWarning.innerHTML = "eneter proper value";
    } else {
      billWarning.innerHTML = "";
    }
    getValue(pplInput, "ppl");
    ppl = parseInt(answer);
    if (ppl == "w") {
      pplWarning.innerHTML = "eneter proper value";
    } else {
      pplWarning.innerHTML = "";
    }
    getTotal(bill, ppl);
    total = totalResult;
    getTip(total, tipOption);

    if (
      bill != 0 &&
      bill > 0 &&
      isNaN(bill) == false &&
      ppl != 0 &&
      ppl > 0 &&
      isNaN(ppl) == false &&
      total != 0 &&
      total > 0 &&
      isNaN(total) == false
    ) {
      theTip = SplittedTip;
    } else {
      theTip = 0;
    }

    if (
      bill != 0 &&
      bill > 0 &&
      isNaN(bill) == false &&
      ppl != 0 &&
      ppl > 0 &&
      isNaN(ppl) == false &&
      total != 0 &&
      total > 0 &&
      isNaN(total) == false
    ) {
      theTotal = total + theTip;
    } else {
      theTotal = 0;
    }

    return { theTip, theTotal };
  }

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var tipInputVal = tipInput.value;
      var customTipAndTotal = calculation(tipInputVal);
      var customTip = parseFloat(customTipAndTotal.theTip);
      var customTotal = parseFloat(customTipAndTotal.theTotal);
      tipOutput.innerHTML = customTip.toFixed(2);
      totalOutput.innerHTML = customTotal.toFixed(2);
    });
  });

  tipOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      tipInput.value = 0;
      var tipOptionVal = option.getAttribute("val");
      var customTipAndTotal = calculation(tipOptionVal);
      var myTip = parseFloat(customTipAndTotal.theTip);
      var myTotal = parseFloat(customTipAndTotal.theTotal);
      tipOutput.innerHTML = myTip.toFixed(2);
      totalOutput.innerHTML = myTotal.toFixed(2);
    });
  });

  resetButton.addEventListener("click", function () {
    tipOutput.innerHTML = "";
    totalOutput.innerHTML = "";
    billWarning.innerHTML = "";
    pplWarning.innerHTML = "";
  });
});
