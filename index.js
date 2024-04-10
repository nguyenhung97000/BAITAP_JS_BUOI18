var mang = [];

function themSo(){

    var so = document.querySelector("#soNguyen").value * 1;
    mang.push(so);
    var danhSach = document.querySelector("#danhSach");
    var listItem = document.createElement("li");
    listItem.textContent = so;
    danhSach.appendChild(listItem);
    so.value = "";

}

function tinhTongSoDuong(){
    var tong = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            tong += mang[i];
        }
    }
    var ketQua = document.querySelector("#ketQua");
    ketQua.textContent = "Tổng các số dương trong mảng là: " + tong;
}
    

function demSoDuong(){
    count = 0;
    for ( var i = 0 ; i < mang.length; i++){
        if(mang[i] > 0){
            count++;
        }
    }
    var ketQua = document.querySelector("#ketQua1");
    ketQua.textContent = "Số dương trong mảng là: " + count;
}
   
function timSoNhoNhat(){
    var min = mang[0];
    for (var i = 1; i < mang.length; i++){
        if (mang[i] < min){
            min = mang[i];
        }
    }
    var ketQua = document.querySelector("#ketQua2");
    ketQua.textContent = "Số nhỏ nhất trong mảng là : " + min;
}

function timSoDuongNhoNhat(){
    var minDuongNhoNhat = Infinity;

    for (i = 0 ; i < mang.length; i++){
        if (mang[i] > 0 && mang[i] < minDuongNhoNhat){
            minDuongNhoNhat = mang[i];
        }
    }
    var ketQua = document.querySelector("#ketQua3");
    ketQua.textContent = "Số dương nhỏ nhất trong mảng là : " + minDuongNhoNhat;
}

function timSoChanCuoiCung(){
    var soChanCuoiCung = -1;
    for (var i = mang.length -1; i >= 0 ; i--){
        if (mang[i]%2 === 0){
            soChanCuoiCung = mang[i];
            break;
        }
    }
    var ketQua = document.querySelector("#ketQua4");
    ketQua.textContent = "Số chẳn cuối cùng trong mảng : " + soChanCuoiCung;
}

function swapNumbers(){
    var index1 = document.querySelector("#index1").value;
    var index2 = document.querySelector("#index2").value;

    var temp = mang[index1];
    mang[index1] = mang[index2];
    mang[index2] = temp;


    var numberListElement = document.querySelector("#danhSach");
    numberListElement.innerHTML = "";
    for (var i = 0; i < mang.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = mang[i];
        numberListElement.appendChild(listItem);

        var swapResultElement = document.querySelector("#swapResult");
        swapResultElement.textContent = "Đã đổi chỗ giá trị ở vị trí " + index1 + " và vị trí " + index2 + " trong mảng.";
    }
}


function sapXepTangDan(){
    mang.sort(function(a,b){
        return a -b ;
    });
    var mangTanngDan = document.querySelector("#ketQua5");
    mangTanngDan.textContent = "Mảng đã được sắp xếp theo thứ tự tăng dần: " + mang.join(", ");
}


function soNguyenTo (number){
    if (number <= 1){
        return false;
    }

    for (var i = 2 ; i < Math.sqrt(number); i++){
        if ( number % i === 0){
            return false;
        }
    }

    return true;
}

function timSoNguyenTo1st(){
    for (var i = 0; i < mang.length; i++){
        if (soNguyenTo(mang[i])){
            var soNguyenToDauTien = document.querySelector("#ketQua6");
            soNguyenToDauTien.textContent = "Số nguyên tố đầu tiên trong mảng là: " + mang[i];
            return;
        }
    }

    var soNguyenToDauTien = document.querySelector("#ketQua6");
    soNguyenToDauTien.textContent = "Không có số nguyên tố trong mảng.";
}


function soSanh(){
    var soDuong = 0;
    var soAm = 0;

    for (var i = 0; i < mang.length; i++){
        if (mang[i] > 0){
            soDuong++;
        }else if(mang[i] < 0){
            soAm++;
        }
    }

    var soSanhDuongAm = document.querySelector("#ketQua8");
    if (soDuong > soAm) {
        soSanhDuongAm.textContent = "Số lượng số dương nhiều hơn số lượng số âm trong mảng.";
    } else if (soDuong < soAm) {
        soSanhDuongAm.textContent = "Số lượng số âm nhiều hơn số lượng số dương trong mảng.";
    } else {
        soSanhDuongAm.textContent = "Số lượng số dương và số âm bằng nhau trong mảng.";
   
}
}



var mangSoThuc = [];

function themSoThuc(){
    var soThuc = document.querySelector("#soThuc").value * 1;
    mangSoThuc.push(soThuc);
    soThuc.value = "";
    var danhSach = document.querySelector("#danhSach2");
    var listItem = document.createElement("li");
    listItem.textContent = soThuc;
    danhSach.appendChild(listItem);
}

function isInteger(number) {
    return Number.isInteger(number);
}

function demSoNguyen(){
    var count = 0;
    for ( i = 0; i < mangSoThuc.length; i++){
       if (isInteger(mangSoThuc[i])){
        count++;
       }
    }

    var ketQua = document.querySelector("#ketQua7");
    ketQua.textContent = "Số lượng số nguyên trong mảng số thực là: " + count;
}