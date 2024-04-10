function changeFacts() {
    document.getElementById('factText1').innerText = getRandomFact();
    document.getElementById('factText2').innerText = getRandomFact();
}

function getRandomFact() {
    const facts = [
        "The Titanic set sail on its maiden voyage on April 10, 1912.",
        "The ship had a total of 20 lifeboats, not enough for all passengers.",
        "The Titanic struck an iceberg and sank on April 15, 1912.",
        // Got to add more shit
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}