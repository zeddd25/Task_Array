// MEDIAN
function median(nilai) {
  nilai = nilai.sort((a, b) => a - b);
  if (nilai.length % 2 !== 0) {
    return nilai[Math.floor(nilai.length / 2)];
  } else {

  }
}

let nilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];
document.write(" 3. Cari lah Median Dari Data Tersebut ",(nilai))
document.write("<br><br>Nilai Median &nbsp", median(nilai));

document.writeln("<br><br>");
