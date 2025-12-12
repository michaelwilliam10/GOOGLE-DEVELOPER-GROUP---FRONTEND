// security.js

const readlineSync = require('readline-sync');

function checkAdmission() {
    console.log("=== Club Coding Security Check ===");

    //INPUT NAMA DAN UMUR
    const name = readlineSync.question('Siapa nama Anda? ');
    
    const ageInput = readlineSync.question(`Hai ${name}, berapa umur Anda? `);
    const age = parseInt(ageInput);

    if (isNaN(age) || age < 1) {
        console.log(`Mohon maaf, Input umur tidak valid untuk ${name}. Silakan coba lagi.`);
        return;
    }

    //CEK UMUR
    if (age < 21) {
        console.log(`Mohon maaf, Akses Ditolak untuk ${name}. Umur Anda adalah ${age}. (Minimal 21 tahun)`);
        console.log("MAAF, ANDA DITOLAK.");
        return; 
    }

    console.log(`Umur ${name} (${age}) lolos batas minimum 21 tahun.`);

    //INPUT UANG
    const moneyInput = readlineSync.question('Berapa jumlah uang yang Anda miliki (Masukkan angka penuh, cth: 500000): ');
    const money = parseInt(moneyInput); // <<< TIDAK ADA PERKALIAN * 1000 LAGI

    //memastikan bahwa input uang itu valid
    if (isNaN(money) || money < 0) {
        console.log(`Mohon maaf, Input jumlah uang tidak valid untuk ${name}. Silakan coba lagi.`);
        return;
    }

    //CEK UANG (Batas minimum tetap 500.000)
    const requiredMoney = 500000; 
    if (money < requiredMoney) {
        const moneyInK = (money).toLocaleString('id-ID'); // Hapus / 1000 agar tampil penuh
        const requiredInK = (requiredMoney).toLocaleString('id-ID'); // Hapus / 1000 agar tampil penuh
        console.log(`Mohon maaf, Akses Ditolak untuk ${name}. Uang Anda Rp${moneyInK}. (Minimal Rp${requiredInK})`);
        console.log("MOHON MAAF, ANDA DITOLAK.");
        return; 
    }

    //SEMUA SUDAH BERJALAN
    const moneyInK = (money).toLocaleString('id-ID'); // Hapus / 1000
    console.log(`Jumlah uang ${name} (Rp${moneyInK}) lolos batas minimum Rp500.000.`);
    console.log("=========================================");
    console.log(`SELAMAT DATANG DI CLUB CODING, ${name}! 🎉`);
    console.log("=========================================");
}

checkAdmission();
