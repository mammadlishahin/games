function kompuiterSecimi() {
    const secimler = ["daş", "kağız", "qayci"];
    const randomm = Math.floor(Math.random() * 3);
    return secimler[randomm];
}

function GameStart(userSelect) {
    const kompuiterSecimiDegeri = kompuiterSecimi();

    if (userSelect === kompuiterSecimiDegeri) {
        return `Bərabərə! İkiniz də ${userSelect} seçdiniz.`;
    }

    if (
        (userSelect === "daş" && kompuiterSecimiDegeri === "qayci") ||
        (userSelect === "kağız" && kompuiterSecimiDegeri === "daş") ||
        (userSelect === "qayci" && kompuiterSecimiDegeri === "kağız")
    ) {
        return `Təbrikler, qazandınız! Siz: ${userSelect}, kompuiter: ${kompuiterSecimiDegeri}`;
    } else {
        return `Təssüf olmadı! Siz: ${userSelect}, kompuiter: ${kompuiterSecimiDegeri}`;
    }
}

const userSelect = prompt("Seçim edin: daş, kağız veya qayci");
if (["daş", "kağız", "qayci"].includes(userSelect)) {
    alert(GameStart(userSelect));
} else {
    alert("Olmadı 'daş', 'kağız' veya 'qayci' yazın.");
}
