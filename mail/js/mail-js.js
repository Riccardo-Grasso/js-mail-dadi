const mailValide = ["Mario.Rossi@gmail.com", "Pinco.Panco@gmail.com", "Paolino.Paperino@gmail.it", "Gianni.Morandi@outlook.it"];
console.log(mailValide.toString());

const mail = prompt("Inserisci la tua Mail:");

if (mail.includes("@")) {

    console.log(`Mail utente: ${mail}`);

    let mailEsiste = false;

    for (let i = 0; i < mailValide.length; i++) {
        const mailCorrente = mailValide[i];

        if (mailCorrente.toLowerCase() === mail.toLowerCase()) {
            alert(`La tua mail ${mail} è tra quelle autorizzate ad accedere.`);
            mailEsiste = true;
        }
    }

    if (mailEsiste === false) {
        alert(`Mi dispiace, la tua mail ${mail} non risulta tra quelle autorizzate ad accedere.`);
    }
} else {
    alert("Formato Mail non valido");
}