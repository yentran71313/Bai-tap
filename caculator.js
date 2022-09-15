function caculator(){
    let bac=[1,51,101,201,301,401]
    let tien=[1.678,1.734,2.014,2.536,2.834,2.927]
    let kWh = parseFloat(document.getElementById('kWh').value)
    var b = kWh
    var amount=0;
    for (var i=(bac.length-1); i>=0; i--) {
        if (kWh > bac[i]){
            let a=b-bac[i]+1
            amount= amount + a*tien[i]
            b = b - a
            console.log(a*tien[i])
        }
    }
    console.log(amount)
    document.getElementById('amount').innerHTML= `${amount*1000} VND`
    }
    function reset(){
        document.getElementById('amount').innerHTML = ''
        document.getElementById('kWh').value = ''
    }
    