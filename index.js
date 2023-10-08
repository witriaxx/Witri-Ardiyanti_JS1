// Program if else untuk menentukan waktu Pagi, Siang, Sore dan Malam
let jam = 20;

if (jam >= 6 && jam < 12) 
    console.log("Selamat Pagi!");
else if (jam >= 12 && jam < 14)
    console.log("Selamat Siang!");
else if (jam >= 14 && jam < 18)
    console.log("Selamat Sore!");
else
    console.log("Selamat Malam!");

// program nested if untuk menentukan diskon berdasarkan total belanja
let totalBelanja = 1200;
let member = true;

if (totalBelanja >= 1000) {
  if (member) {
    console.log("Anda mendapatkan diskon 10%");
  } else {
    console.log("Anda mendapatkan diskon 5%");
  }
} else {
  console.log("Tidak ada diskon untuk total belanja ini");
}

// Program switchcase untuk menentukan warna balon dari angka ke teks 
let warna = 3;
let namawarna;

switch (warna) {
  case 1:
    namawarna = " Berwarna Hijau";
    break;
  case 2:
    namawarna = " berwarna Kuning";
    break;
  case 3:
    namawarna = "Berwarna Merah";
    break;
  case 4:
    namawarna = "Berwarna Biru";
    break;
  default:
    namawarna = "Tidak berwarna";
}
console.log("Balon ini " + namawarna);

// Program for statement untuk mencetak hari dalam seminggu
let daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log("Hari ini adalah hari " + daysOfWeek[i]);
}
  
// program while untuk memperoses item dalam keranjang belanja
let keranjangBelanja = ["Apel", "Pisang", "Jeruk", "Mangga"];
let item = 0;

console.log("Isi keranjang belanja: ");

while (item < keranjangBelanja.length) {
  console.log(keranjangBelanja[item]);
  item++;
}

// Program do while untuk memvalidasi password
let input;
let valid = false;

do {
  input = prompt("Masukkan password Anda:");
  if (input === "12345") {
    console.log("Berhasil. Selamat datang!");
    valid = true;
  } else {
    console.log("Password salah. Silakan coba lagi.");
  }
} while (!valid);

// program function untuk sapa nama
function sapa(nama) {
    console.log("Halo, " + nama + "!");
  }
  sapa("Witri");
  