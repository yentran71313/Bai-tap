function caculator(){
    var amount=0;
    let kWh = parseFloat(document.getElementById('kWh').value)
    var sokWh = kWh
    if (kWh>401){
        let bac= sokWh-401+1
        amount=amount+ bac*2.927
        sokWh=sokWh-bac
    }
    if (kWh>301){
        let bac= sokWh-301+1
        amount=amount+ bac*2.834
        sokWh=sokWh-bac
    }
    if (kWh>201){
        let bac= sokWh-201+1
        amount=amount+ bac*2.536
        sokWh=sokWh-bac
    }
    if (kWh>101){
        let bac= sokWh-101+1
        amount=amount+ bac*2.014
        sokWh=sokWh-bac
    }
    if (kWh>51){
        let bac= sokWh-51+1
        amount=amount+ bac*1.734    
        sokWh=sokWh-bac
    }
    if (kWh>0){
        let bac= sokWh
        amount=amount+ bac*1.678
        sokWh=sokWh-bac
    }
    document.getElementById('amount').innerHTML= `${amount*1000} VND`
}
function reset(){
    document.getElementById('amount').innerHTML = ''
    document.getElementById('kWh').value = ''
}