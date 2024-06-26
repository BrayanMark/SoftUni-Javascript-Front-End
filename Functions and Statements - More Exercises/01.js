function solve(commands) {

    let value = 0;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        switch (command) {

            case "soap":
                value += 10;
                break;

            case "water":
                value *= 1.20;
                break;

            case "vacuum cleaner":
                value *= 1.25;
                break;

            case "mud":
                value *= 0.90;
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}