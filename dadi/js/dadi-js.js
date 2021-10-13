const dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(`Risultato utente: ${dadoUtente}`);
alert(`Risultato Utente: ${dadoUtente}`);

const dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Risultato Computer: ${dadoComputer}`);
alert(`Risultato Computer: ${dadoComputer}`);

if (dadoUtente > dadoComputer) {
    alert(`L'utente ha battuto il computer per ${dadoUtente}-${dadoComputer}`);

} else if (dadoUtente < dadoComputer) {
    alert(`Il computer ha battuto l'utente per ${dadoComputer}-${dadoUtente}`);

} else {
    alert(`Pareggio: ${dadoUtente}-${dadoComputer}`);
}