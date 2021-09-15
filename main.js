window.addEventListener('DOMContentLoaded', function(){
    var billInput = document.querySelector('.billCount');
    var pplCountInput = document.querySelector('.pplCount');
    var tipOptionsArea= document.querySelector('.tip-options');
    var tipOptions = tipOptionsArea.querySelectorAll('.tip-option');
    let tipPrcnt = 0;
    tipOptions.forEach(function(option){
        option.addEventListener('click', function(){
            var prcntVal = option.getAttribute('val'); 
            tipPrcnt = prcntVal;
        })
    })
    pplCountInput.addEventListener('input', function(){
        var billValue = billInput.value;
        var pplCount = pplCountInput.value;

        console.log(billValue + pplCount);
    })
})