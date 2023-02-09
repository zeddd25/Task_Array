let dataNilaiSantri2 = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let nilaiRataRata = dataNilaiSantri2.reduce((a, b) => a + b, 0);
let rataRata = (nilaiRataRata / dataNilaiSantri2.length).toFixed(2);
hasil = dataNilaiSantri2.map((k) => {
    return((k - rataRata))** 2  
})
const jumlah = hasil.reduce((a, b) => a + b, 0);
const bagi = (jumlah / dataNilaiSantri2.length);
const result = bagi.toFixed();
const akhir = (result) => {
  return Math.sqrt(result);
}
const nilaiSimpanganBaku = akhir(result)

document.write(`5. Carilah Nilai Simpangan Baku Dari Data Tersebut : [ ${dataNilaiSantri2} ] <br><br> `)
document.write(`Nilai Rata Rata ${rataRata} <br><br> `)
document.write(`Simpangan Baku = ${nilaiSimpanganBaku.toFixed(2)}`);