const veryDiscoWord = (word) => {
    const mid = Math.ceil(word.length / 2);
    return word.slice(mid) + word.slice(0, mid)
}

// Main function
function veryDisco() {
    // Get the command line arguments
    const args = process.argv.slice(2)[0];

    // Split sentence into words, apply the "very disco" transformation, and join them back
    const discoSentence = args
        .split(' ')
        .map(veryDiscoWord)
        .join(' ');

    console.log(discoSentence);
}
veryDisco();
