#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number" , type: "number", name:"firstNumber"},
{message:"Enter second number",type:"number",name:"secondNumber"},
{message:"Select your operator to perform",type:"list", name:"operator",choices:["Addition","Subtraction","Multiplication","Division","Modulus"],
},
])
if (answer.operator=="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator=="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator=="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator=="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
 else if(answer.operator=="Modulus"){
        console.log(answer.firstNumber % answer.secondNumber);
    }
else
{
    console.log("Please select valid operator")
}
