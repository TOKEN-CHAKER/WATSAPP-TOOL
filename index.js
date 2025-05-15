const chalk = require("chalk");
const readline = require("readline");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function logoAnimation() {
    const logoLines = [
        chalk.green("██████╗ ██████╗  ██████╗ ██╗  ██╗███████╗███╗   ██╗"),
        chalk.green("██╔══██╗██╔══██╗██╔════╝ ██║ ██╔╝██╔════╝████╗  ██║"),
        chalk.green("██████╔╝██████╔╝██║  ███╗█████╔╝ █████╗  ██╔██╗ ██║"),
        chalk.green("██╔═══╝ ██╔══██╗██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║"),
        chalk.green("██║     ██║  ██║╚██████╔╝██║  ██╗███████╗██║ ╚████║"),
        chalk.green("╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝"),
        chalk.cyan("           WhatsApp Sender by Broken Nadeem"),
        chalk.magenta("                 Power of Dark Terminal")
    ];

    for (const line of logoLines) {
        console.log(line);
        await sleep(100);
    }

    console.log(chalk.yellow("\nStarting Script... Please wait...\n"));
    await sleep(1000);
}
