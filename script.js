// Oppgave 1
let userName = "John";
let userAge = 20;
let userCity = "Bergen";

if (userAge > 18) {
  console.log("Du er over 18, velkommen inn");
} else if (userAge <= 18 || userCity === "Oslo") {
  console.log("Du er ikke gammel nok, og du er fra feil by");
} else userName === "John" && userCity === "Bergen";
{
  console.log("Velkommen inn, John fra Bergen!");
}

// Oppgave 2
const calculator = (num1, num2, operator) => {
  let total = 0;
  switch (operator) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
  }
};
console.log(calculator(5, 8, "/"));
