// atspausdinti skaicius nuo 0 iki 30

// for (kintamasis; salyga ; kintamojopokytis) {}

for (let i = 0; i <= 10; i += 1) {
  // vygdomas kodas
  // console.log(i);
  document.body.insertAdjacentHTML('afterbegin', `<p>Hello ${i} </p>`);
}

// atspausdinti skaicius nuo 15 iki 55
// atspausdinti skaicius nuo 100 iki 40 mazajancia tvarka
// sudeti skaicius nuo 1 iki 10 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
// paimti skaicius nuo 2 iki 10 ir isvesti ju vidurki su for ciklo pagalba
// paimti skaicius nuo 11 iki 22 ir atspausdinti kiekviena skaiciu padauginta is 2

let total = 0;
for (let i = 3; i <= 5; i++) {
  total += i;
  console.log('total ===', total);
  console.log(`i: ${i}`);
}
console.log('total total ===', total);

// paimti skaicius nuo 2 iki 10 ir isvesti ju vidurki su for ciklo

// psiaudo kodas
// sukam cika nuo 2 iki 10
// sukdami mes skaicuojam bendra suma
// sukdami mes skaicuojam kiek skaiciu jau buvo
// po ciklu padalinti suma is kiek buvo skaiciu
