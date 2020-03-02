function square(num) {
    return num * num;
}

function periCircle(radius) {
    return radius * 2 * Math.PI;
}

function areaCircle(radius) {
    return radius ** 2 * Math.PI;
}

function functionEx2() {
    let R = parseFloat(prompt("Nhap vao ban kinh hinh tron :"));
    if (R >= 0) {
        document.getElementById('perimeter').innerHTML =
            "Hinh tron ban kinh " + R + " co chu vi la : " + periCircle(R).toFixed(2);
        document.getElementById('area').innerHTML =
            "Hinh tron ban kinh " + R + " co dien tich la : " + areaCircle(R).toFixed(2);
    } else document.getElementById('perimeter').innerHTML = "Ban kinh ban nhap vao khong dung !!!";
}

function factorial(num) {
    let total = 1;
    if (num === 0) return 1;
    if (num > 0 && num % 1 === 0) {
        for (let i = 1; i <= num; i++) {
            total *= i;
        }
        return total;
    } else return "So ban nhap khong phai so nguyen duong ";
}

function testDigit(num) {
    if (num > -99999999999999999999999) return true;
    else return false;
}

function ex5() {
    let a = prompt("Nhap vao so nguyen thu nhat : ");
    let b = prompt("Nhap vao so nguyen thu hai : ");
    let c = prompt("Nhap vao so nguyen thu ba : ");
    if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) document.getElementById('resultEx5').innerHTML = "Ban da nhap sai";
    else document.getElementById('resultEx5').innerHTML = "So nho nhat trong 3 so la : " + min(a, b, c);
}

function min(a, b, c) {
    if (a <= b && a <= c) return a;
    if (b <= a && b <= c) return b;
    if (c <= a && c <= b) return c;
}

function ex6() {
    document.getElementById("resultEx6").innerHTML
        = testInt(parseFloat(prompt("Nhap vao mot so nguyen duong : ")))
}

function testInt(num) {
    if (num <= 0) {
        return false;
    }
    if (num % 1 !== 0) {
        return false;
    }
    return true;
}

function ex7() {
    let a = prompt("Nhap vao so thu nhat : ");
    let b = prompt("Nhap vao so thu hai : ");
    document.getElementById("Ex7").innerHTML = "Thu tu ban dau : " + a + " " + b;
    document.getElementById("resultEx7").innerHTML = "Sau khi sap xep : " + b + " " + a;
}

function ex8() {
    let arr = makeArr(prompt("Nhap vao do dai cua mang : "));
    document.getElementById("Ex8").innerHTML = arr;
    document.getElementById("resultEx8").innerHTML = arr.reverse();
}

function makeArr(arrLength) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = prompt("Nhap vao phan tu trong mang : ");
    }
    return arr;
}

function ex9() {
    let arr = makeArr(prompt("Nhap vao do dai cua mang : "));
    let count=0;
    let sign=(prompt("Nhap vao mot ky tu bat ky : "));
    document.getElementById("Ex9").innerHTML = arr;
    for(let i=0;i<arr.length;i++){
       if(sign===arr[i])count++;
    }
    if (count==0)document.getElementById("resultEx9").innerHTML="Khong co ky tu "+sign+" trong mang. "
    else document.getElementById("resultEx9").innerHTML="Trong mang co : "+count+" ky tu "+sign;
}
