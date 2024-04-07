#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";
console.log(chalk.bgMagentaBright('\n********Welcome! And Explore the Currency Converter! ******** \n This tool enables you to seamlessly switch between different currencies.'));

  let Currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  UAE: 3.67,
  SAR: 3.75,

};

  let user_answer = await inquirer.prompt(
  [
    {
      name: 'from',
      message: chalk.green.bold('Select the currency you are converting FROM:'),
      type: 'list',
      choices: [
                 'USD',
                 'EUR',
                 'GBP',
                 'INR',
                 'PKR',
                 'UAE',
                 'SAR'
                ],
    },
    {
      name: 'to',
      message: chalk.redBright.bold('Select the currency you are converting TO:'),
      type: 'list',
      choices: [
                 'USD',
                 'EUR',
                 'GBP',
                 'INR',
                 'PKR',
                 'UAE',
                 'SAR'
               ],
    },
    {
      name: 'amount',
      message: chalk.blueBright.bold('Please enter the amount you want to convert'),
      type: 'number',
    },
  ]
)

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(chalk.yellow(convertedAmount.toFixed(2)));
console.log (chalk.green('\n \tSuccessfully Convert Amount\n \t'));

console.log(chalk.bgMagenta('\n \t***Thank you for using my Curency Converter!***\n'));






