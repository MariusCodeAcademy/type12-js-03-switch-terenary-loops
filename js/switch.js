'use strict';
// gaunam is vartotjo su prompt skaiciu nuo 1 iki 3

// let gavauSk = prompt('Please enter weekday');
let gavauSk = '6';
// +'1' === Number('1')
gavauSk = +gavauSk;
// if (gavauSk === 1) {
//   console.log(`pasirinktas skaicius yra ${gavauSk}: -- Pirmadienis`);
// } else if (gavauSk === 2) {
//   console.log(`pasirinktas skaicius yra ${gavauSk}: -- Antradienis`);
// } else if (gavauSk === 3) {
//   console.log(`pasirinktas skaicius yra ${gavauSk}: -- Treciadienis`);
// } else {
//   console.log(`pasirinktas skaicius yra ${gavauSk}: Klaida`);
// }

switch (gavauSk) {
  case 1:
    // kai gavauSk === 1
    console.log(`pasirinktas skaicius yra ${gavauSk}: -- Pirmadienis`);
    break;
  case 2:
    console.log(`pasirinktas skaicius yra ${gavauSk}: -- Antradienis`);
    break;
  case 3:
    console.log(`pasirinktas skaicius yra ${gavauSk}: -- Treciadienis`);
    break;
  case 4:
    console.log(`pasirinktas skaicius yra ${gavauSk}: -- Ketvirtadienis`);
    break;
  case 5:
  case 6:
  case 7:
    console.log(`pasirinktas skaicius yra ${gavauSk}: -- Savaitgalis`);
    break;
  default:
    console.log(`pasirinktas skaicius yra ${gavauSk}: Klaida`);
}

// gaunam is prompt menesio sk nuo 1 - 12
// su switch kelintas ketvirtis
// 1 ketvirtis
// 2 ketvirtis
// 3 ketvirtis
// 4 ketvirtis

let menuo = +'4';

switch (menuo) {
  case 1:
  case 2:
  case 3:
    console.log('1 ketvirtis');
    break;
}
