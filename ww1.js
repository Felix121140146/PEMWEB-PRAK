// script.js
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;
const BATAS_KELULUSAN = 60;

function hitungNilai() {
  // Ambil nilai input
  let tugas = parseFloat(document.getElementById("tugas").value);
  let uts = parseFloat(document.getElementById("uts").value);
  let uas = parseFloat(document.getElementById("uas").value);

  // Validasi input
  if (
    isNaN(tugas) || tugas < 0 || tugas > 100 ||
    isNaN(uts) || uts < 0 || uts > 100 ||
    isNaN(uas) || uas < 0 || uas > 100
  ) {
    document.getElementById("hasil").innerHTML = "<span class='fail'>Input harus antara 0 dan 100</span>";
    return;
  }

  // Hitung rata-rata tertimbang
  let rataRata = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);

  // Tentukan nilai huruf
  let nilaiHuruf;
  if (rataRata >= 90) {
    nilaiHuruf = "A";
  } else if (rataRata >= 80) {
    nilaiHuruf = "B";
  } else if (rataRata >= 70) {
    nilaiHuruf = "C";
  } else if (rataRata >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  // Tentukan status lulus/gagal
  let status = rataRata >= BATAS_KELULUSAN ? "Lulus" : "Gagal";
  let warnaStatus = rataRata >= BATAS_KELULUSAN ? "pass" : "fail";

  // Tampilkan hasil
  document.getElementById("hasil").innerHTML = `
    <p>Nilai Tugas: ${tugas * BOBOT_TUGAS} (30%)</p>
    <p>Nilai UTS: ${uts * BOBOT_UTS} (30%)</p>
    <p>Nilai UAS: ${uas * BOBOT_UAS} (40%)</p>
    <p>Rata-rata Tertimbang: ${rataRata.toFixed(2)}</p>
    <p>Nilai Huruf: ${nilaiHuruf}</p>
    <p class="${warnaStatus}">Status: ${status}</p>
  `;
}
