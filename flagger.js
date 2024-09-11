const flags = (options) => {
    let flagInfo = {
        aliases: { h: "help" },
        description: ""
    };

    for (const [flagName, flagValue] of Object.entries(options)) {
        if (flagName !== "help") {
            flagInfo.aliases[flagName.charAt(0)] = flagName; // Use charAt instead of at
        } else {
            for (const helpFlag of options["help"]) {
                flagInfo.description += `-${helpFlag.charAt(0)}, --${helpFlag}: ${options[helpFlag]}\n`;
            }
        }
        if (!options["help"]) {
            flagInfo.description += `-${flagName.charAt(0)}, --${flagName}: ${flagValue}\n`;
        }
    }

    flagInfo.description = flagInfo.description.trim(); // Use trim to remove last newline character

    return flagInfo;
}

const object = {
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
}
console.log(flags(object))