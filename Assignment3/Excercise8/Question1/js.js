function Cộng(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = parseInt(a) + b;
    document.getElementById('result').innerHTML = ans;
}
function Trừ(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = parseInt(a) - b;
    document.getElementById('result').innerHTML = ans;
}
function Nhân(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = parseInt(a) * b;
    document.getElementById('result').innerHTML = ans;
}
function Chia(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = parseInt(a) / b;
    document.getElementById('result').innerHTML = ans;
}
function Dư(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans = parseInt(a) % b;
    document.getElementById('result').innerHTML = ans;
}