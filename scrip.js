alert("assalamualaikum")
    console.log("scrip.js internal berhasil")

function sapa(nama){
    let pesan = "halo," + nama + "! apa kabar?";
    return pesan;
}
let ucapanuntukbudi =  sapa("budi");
console.log(ucapanuntukbudi);

let ucapanuntukani = sapa("ani")
console.log(ucapanuntukani);

const judul=document.getElementById('judul-utama');
console.log(judul);

const infopertama=document.querySelector('.info');
console.log(infopertama);

const semuainfo=document.querySelectorAll('.info');
console.log(semuainfo);

judul.innerText= "selamat datang di dunia DOM";

const divinfo = document.querySelector('div.info');
divinfo.innerHTML = "<strong>teks ini sekarang tebal!</strong>";

judul.style.color = 'blue';
judul.style.backgroundColor = 'lightgray';
judul.style.padding = '15px';
judul.style.textAlign = 'center';