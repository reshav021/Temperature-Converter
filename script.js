function calculate(){
    let s1 = document.getElementsByName('scale1')[0];
    let t1 = s1.options[s1.selectedIndex].text;

    let s2 = document.getElementsByName('scale2')[0];
    let t2 = s2.options[s2.selectedIndex].text;

    let num = parseInt(document.getElementById('num').value);
    let result=0;

    if(t1==='Celsius' && t2==='Fahrenheit'){
        result = (((9/5)*num) + 32) + " F";
    }
    else if(t1==='Celsius' && t2==='Kelvin'){
        result = (num + 273.15) + " K";
    }
    else if(t1==='Fahrenheit' && t2==='Celsius'){
        result = (((5/9)*num) + 32) + " C";
    }
    else if(t1==='Fahrenheit' && t2==='Kelvin'){
        result = (((num-32)*(5/9)) + 273.15) + " K";
    }
    else if(t1==='Kelvin' && t2==='Celsius'){
        result = (num - 273.15) + " C";
    }
    else if(t1==='Kelvin' && t2==='Fahrenheit'){
        result = (((num-273.15)*(9/5)) + 32) + " F";
    }

    document.getElementById("res").innerHTML = result;
}
