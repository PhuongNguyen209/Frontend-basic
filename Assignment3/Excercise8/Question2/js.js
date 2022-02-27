function Tinhtoan(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let ans1 = (parseInt(a) + b) * 2;
    let ans2 = parseInt(a) * b;
    document.getElementById('result1').innerHTML = ans1;
    document.getElementById('result2').innerHTML = ans2;
}