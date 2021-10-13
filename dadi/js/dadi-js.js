const numeroDadi = parseInt(prompt("Inserire il numero di dadi con cui si vuole giocare:"));

if (isNaN(numeroDadi)) {
    alert("Numero dadi non valido, riprovare.");

} else {
    console.log(`Numero dadi: ${numeroDadi}`);
    alert(`Stai giocando con ${numeroDadi} dadi.`);

    const lancioPlayer = [];
    const lancioComputer = [];

    // Risultati PLAYER
    for (i = 0; i < numeroDadi; i++) {
        lancioPlayer.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(lancioPlayer);

    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    const punteggioPlayer = lancioPlayer.reduce(reducer);

    console.log("Punteggio Player: " + punteggioPlayer);
    alert(`Risultato lancio Player: ${lancioPlayer}. Punteggio Totale: ${punteggioPlayer}`);

    // Risultati COMPUTER
    for (i = 0; i < numeroDadi; i++) {
        lancioComputer.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(lancioComputer);

    const punteggioComputer = lancioComputer.reduce(reducer);
    console.log("Punteggio Computer: " + punteggioComputer);
    alert(`Risultato lancio Computer: ${lancioComputer}. Punteggio Totale: ${punteggioComputer}`);

    //Controllo risultati
    if (punteggioPlayer > punteggioComputer) {
        console.log("Vince: Player");
        alert(`Il Player ha battuto il Computer per ${punteggioPlayer}-${punteggioComputer}`);

    } else if (punteggioPlayer < punteggioComputer) {
        console.log("Vince: Computer");
        alert(`Il Computer ha battuto il Player per ${punteggioPlayer}-${punteggioComputer}`);

    } else {
        console.log("Pareggio");
        alert(`Pareggio: ${punteggioPlayer}-${punteggioComputer}`);
    }
}