function sayiTahminOyunu() {
    const dogruSayi = Math.floor(Math.random() * 50) + 1; 
    let tahminHakki = 3;
    let qazandimi = false;

    while (tahminHakki > 0) {
        const userSelect = parseInt(prompt(`1 ile 50 arasında bir reqem təxmin edin. qalan haqqınız: ${tahminHakki}`), 10);

        if (isNaN(userSelect) || userSelect < 1 || userSelect > 50) {
            alert("olmadı 1 ile 50 arasında bir reqem girin.");
            continue;
        }

        if (userSelect === dogruSayi) {
            alert("Təbriklər! Doğrudur ");
            qazandimi = true;
            break;
        } else if (userSelect > dogruSayi) {
            alert("Daha kiçik bir reqem girin.");
        } else {
            alert("Daha büyük bir reqem girin.");
        }

        tahminHakki--;
    }

    if (!qazandimi) {
        alert(`Təssüf ki, haqqınız  bitti. Doğru reqem ${dogruSayi} idi.`);
    }
}

sayiTahminOyunu();
