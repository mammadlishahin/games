function higherLowerGame() {
    let currentNumber = Math.floor(Math.random() * 100) + 1;  
    let noldu = false;

    alert(`Başlangıç reqemi: ${currentNumber}`);

    const nextNumber = Math.floor(Math.random() * 100) + 1;
    
    const userSelect = prompt("Reqem daha büyük mü ('higher') yoxsa daha kiçikmi  ('lower')?").toLowerCase();

    if ((nextNumber > currentNumber && userSelect === "higher") ||
        (nextNumber < currentNumber && userSelect === "lower")) {
        alert(`Təbriklər! Kazandınız. Yeni reqem ${nextNumber} idi.`);
        noldu = true;
    } else {
        alert(`Təssüf, uduzdunuz. Yeni reqem ${nextNumber} idi.`);
    }
}

higherLowerGame();
