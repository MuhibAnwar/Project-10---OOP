import inquirer from "inquirer";
import chalk from "chalk";

class Person {
    private personality: string;

    constructor(personality: string = "Mystery") {
        this.personality = personality;
    }

    userInput(input: string) {
        if (input.includes('talk to other yourself in openly')) {
            this.personality = 'Happy';
        } else if (input.includes('keep quite and dont ask')) {
            this.personality = 'take rude';
        }
    }

    get personality0() {
        return this.personality;
    }
}

class Main {
    public async main() {
        const input = await inquirer.prompt({
            name: "choices",
            type: "list",
            choices: ["talk to other yourself in openly", "keep quite and dont ask"],
            message: chalk.yellow('TELL YOUR BEHAVIOUR')
        });

        let myperson = new Person();
        myperson.userInput(input.choices);
        console.log(`You are ${myperson.personality0}`);
    }
}

const myobject = new Main();
myobject.main();
