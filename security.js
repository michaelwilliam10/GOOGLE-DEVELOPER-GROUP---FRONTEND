// security.js

const readlineSync = require('readline-sync');

function checkAdmission() {
    console.log("=== Club Coding Security Check ===");

    //Line kode untuk mengambil input Nama guna menampilkan nama 
    const name = readlineSync.question('Siapa nama Anda? ');
    
    //Line kode untuk mengambil input Umur
    const ageInput = readlineSync.question(`Hai ${name}, berapa umur Anda? `);
    const age = parseInt(ageInput);

    //line kode untuk memastikan bahwa input umur valid
    if (isNaN(age) || age < 1) {
        console.log(`Mohon maaf, Input umur tidak valid untuk ${name}. Silakan coba lagi.`);
        return;
    }

    //CEK UMUR
    if (age < 21) {
        console.log(`Mohon maaf, Akses Ditolak untuk ${name}. Umur Anda adalah ${age}. (Minimal 21 tahun)`);
        console.log("MAAF, ANDA DITOLAK.");
        return; // Menghentikan program
    }

    //Jika Umur >= 21, lanjut ke cek Uang
    console.log(`Umur ${name} (${age}) lolos batas minimum 21 tahun.`);

    //LINE KODE UNTUK MENGAMBIL INPUT UANG
    const moneyInput = readlineSync.question('Berapa jumlah uang yang Anda miliki (NOTE: Minimal Rp500.000): ');
    const money = parseInt(moneyInput) * 1000; // Konversi ke Rupiah

    //memastikan bahwa input uang itu valid
    if (isNaN(money) || money < 0) {
        console.log(`Mohon maaf, Input jumlah uang tidak valid untuk ${name}. Silakan coba lagi.`);
        return;
    }

    //CEK UANG
    const requiredMoney = 500000;
    if (money < requiredMoney) {
        const moneyInK = (money / 1000).toLocaleString('id-ID');
        const requiredInK = (requiredMoney / 1000).toLocaleString('id-ID');
        console.log(`Mohon maaf, Akses Ditolak untuk ${name}. Uang Anda Rp${moneyInK}. (Minimal Rp${requiredInK})`);
        console.log("MOHON MAAF, ANDA DITOLAK.");
        return; //Menghentikan program
    }

    //SEMUA SUDAH BERJALAN
    const moneyInK = (money / 1000).toLocaleString('id-ID');
    console.log(`Jumlah uang ${name} (Rp${moneyInK}) lolos batas minimum Rp500.000.`);
    console.log("=========================================");
    console.log(`SELAMAT DATANG DI CLUB CODING, ${name}! 🎉`);
    console.log("=========================================");
}

checkAdmission();