#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//computer will generate a random number
//user input for guessing number
//compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random()*10+1);
console.log(chalk.yellow("Welcome to number Guesing Game"));
const answer = await inquirer.prompt([
    {
    name:"userGUESSNUMBER",
    type:"number",
   message:chalk.blue("Please guess a number between 1-10:"),
    },
]);
if(answer.userGUESSNUMBER == randomnumber)
{
    console.log(chalk.green("Congtratulations! you guessed right number"));
}
else {
    console.log(chalk.red("Sorry! You guessed wrong number"));

};
console.log(chalk.magenta(`Random number was ${randomnumber}`))
console.log(chalk.bgCyan("THE END"));





