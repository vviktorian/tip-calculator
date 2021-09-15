window.addEventListener('DOMContentLoaded', function(){
    var billInput = document.querySelector('.billCount');
    var pplCountInput = document.querySelector('.pplCount');
    var tipOptionsArea= document.querySelector('.tip-options');
    var tipOptions = tipOptionsArea.querySelectorAll('.tip-option');
    let total = document.querySelector('.total-ready');
    let tip = document.querySelector('.tip-ready');
    
    let tipPrcnt = 0;
    tipOptions.forEach(function(option){
        option.addEventListener('click', function(){
            var prcntVal = option.getAttribute('val'); 
            tipPrcnt = parseInt(prcntVal);
        })
    })
    pplCountInput.addEventListener('input', function(){
        var billValue = parseInt(billInput.value);
        var pplCount = parseInt(pplCountInput.value);

        var tipValue = billValue * (tipPrcnt / 100);
        var tipPPerson = parseFloat(tipValue / pplCount);
        var totalPPerson = billValue / pplCount; 
        
        if(isNaN(totalPPerson) == false){
            total.innerHTML = totalPPerson.toFixed(2);
        }
        
        if(isNaN(tipPPerson) == false & tipPPerson != 0){
            tip.innerHTML = tipPPerson.toFixed(2);
        }
    })
})