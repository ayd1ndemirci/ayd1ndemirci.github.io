// script.js
document.addEventListener("DOMContentLoaded", function () {


    const textElement = document.getElementById('text');
    const sentences = [
        "I'm fullstack developer.",
        "I'm php developer.",
        "I'm game developer.",
        "I'm student.",
        "I'm NodeJS developer."
    ];

    let currentSentenceIndex = 0;
    let currentCharacterIndex = 0;

    function typeSentence() {
        const sentence = sentences[currentSentenceIndex];
        if (currentCharacterIndex < sentence.length) {
            textElement.textContent += sentence.charAt(currentCharacterIndex);
            currentCharacterIndex++;
            setTimeout(typeSentence, 75);
        } else {
            setTimeout(eraseSentence, 950);
        }
    }

    function eraseSentence() {
        if (currentCharacterIndex >= 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            currentCharacterIndex--;
            setTimeout(eraseSentence, 50);
        } else {
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            setTimeout(typeSentence, 500);
        }
    }

    typeSentence();
});