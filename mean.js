// MEAN
let dataNilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];

let jumlahnilai = 0;
for (i in dataNilaiSantri) {
  jumlahnilai += dataNilaiSantri[i];
}
document.writeln((" 2. Cari Nilai Mean Dari Data Tersebut : "),dataNilaiSantri)
document.writeln("<br><br>");
let ratarata = jumlahnilai / dataNilaiSantri.length;
document.writeln("Nilai Mean &nbsp" + ratarata.toFixed(2));

document.writeln("<br><br>");