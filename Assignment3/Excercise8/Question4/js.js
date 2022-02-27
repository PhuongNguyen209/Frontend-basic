function calculate(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    add = document.getElementById('add').parseInt((a) + b);
    sub = document.getElementById('sub').parseInt((a) - b);
    sum = document.getElementById('sum').parseInt((a) * b);
    div = document.getElementById('div').parseInt((a) / b);
    document.getElementById('result').innerHTML = add;
    document.getElementById('result').innerHTML = sub;
    document.getElementById('result').innerHTML = mul;
    document.getElementById('result').innerHTML = div;
}

