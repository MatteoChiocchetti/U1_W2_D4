/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(4, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
  let result = num1 + num2;
  if (num1 === num2) {
    return result * 3;
  } else {
    return result;
  }
}
console.log(crazySum(8, 6));
console.log(crazySum(8, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n) {
  const absDiff = Math.abs(n - 19);
  if (n > 19) {
    return absDiff * 3;
  } else {
    return absDiff;
  }
}
console.log(crazyDiff[2]);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}
console.log(boundary(20));
console.log(boundary(401));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str) {
  if (str.toUpperCase().startsWith("EPICODE")) {
    return str;
  } else {
    const epified = "EPICODE" + str;
    return "EPICODE" + str;
  }
}
console.log(epify("bella raga"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  return n % 3 === 0 || n % 7 === 0;
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  const arrOfChar = str.split("");
  console.log(arrOfChar);
  console.log(arrOfChar.reverse());
}
reverseString("epicode");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
  const words = str.split("");
  const arrOfNewWords = [];
  for (let i = 0; i < words.lenght; i++) {
    const word = words[i];
    const firstChar = word.charAt(0);
    const firstCharUpperCase = firstChar.toUpperCase();
    const remainingLetters = word.slice(1);
    const wordCapitalzed = firstCharUpper + remainingLetters;
    arrOfNewWords.push(wordCapitalzed);
  }
  return arrOfNewWords.join("");
}
console.log(upperFirst("Oggi è una bella giornata"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function cutString()

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
