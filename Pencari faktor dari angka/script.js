const angka = document.querySelector(".angka").value;
const tombol = document.querySelector(".tombol");

function cariFaktor(number) {
    let hasil = []
    for (let i = 1; i <= number; i++) {
        if(number % i == 0){
            hasil.push(i);
        }
    }
    return hasil
}

tombol.addEventListener("click",  )




