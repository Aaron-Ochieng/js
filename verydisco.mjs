const veryDiscoWord = (word) => {
    const mid = Math.ceil(word.length / 2);
    return word.slice(mid) + word.slice(0, mid)
}

// Main function
function veryDisco() {
    // Get the command line arguments
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error("No argument provided. Please provide a sentence.");
        process.exit(1);
    }

    // Join the arguments into a single string (in case of multi-word arguments)
    const sentence = args.join(' ');

    // Split sentence into words, apply the "very disco" transformation, and join them back
    const discoSentence = sentence
        .split(' ')
        .map(veryDiscoWord)
        .join(' ');

    console.log(discoSentence);
}
veryDisco();
