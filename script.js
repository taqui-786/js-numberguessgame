let input = document.getElementById("input");
let display = document.getElementById("display");
let result = document.getElementById("result");
let btn2 = document.getElementById("btn-again");
let btn = document.getElementById("btn");
let main = [];
let ran = Math.random();
main += ran;
let num = main.slice(4, 6);

display.innerHTML = "Last Number : ?? ";
result.innerHTML = " 🤨...HINT ...🙄";
let get = function () {
  let output = input.value;
  display.innerHTML = "";
  display.innerHTML += `Last Number : ${output}`;

  result.innerHTML = "";
  if (input.value == "") {
    result.innerHTML += "🙄...Please enter any number...🙄";
  } else if (input.value.length > 2) {
    result.innerHTML += "💢💢.Enter only 2 DIGIT Number.💢💢";
  } else if (Number(output) + 1 == num) {
    result.innerHTML += "Yaah just ONE  step FORWARD...";
  } else if (Number(output) + 2 == num) {
    result.innerHTML += "You have came TOO close just go FORWARD...";
  } else if (Number(output) + 3 == num) {
    result.innerHTML += "You have came TOO close just go FORWARD...";
  } else if (Number(output) + 4 == num) {
    result.innerHTML += "You have came TOO close just go FORWARD...";
  } else if (Number(output) + 5 == num) {
    result.innerHTML += "You have came close just go FORWARD...";
  } else if (Number(output) + 6 == num) {
    result.innerHTML += "You have came close just go FORWARD...";
  } else if (Number(output) + 7 == num) {
    result.innerHTML += "You have came close just go FORWARD...";
  } else if (Number(output) + 8 == num || Number(output) + 9 == num) {
    result.innerHTML += "You are Going close just TRY and go FORWARD...";
  } else if (
    Number(output) + 10 == num ||
    Number(output) + 11 == num ||
    Number(output) + 12 == num ||
    Number(output) + 13 == num ||
    Number(output) + 14 == num
  ) {
    result.innerHTML +=
      "You are Going close to the number  .. just go FORWARD...";
  } else if (
    Number(output) + 15 == num ||
    Number(output) + 16 == num ||
    Number(output) + 17 == num
  ) {
    result.innerHTML += "Go FORWARD you are on the way..";
  } else if (Number(output) + 18 == num || Number(output) + 19 == num) {
    result.innerHTML += "You are going close .. just go FORWARD ..";
  } else if (Number(output) + 20 == num) {
    result.innerHTML += "Try you can do it ... Go FORWARD...";
  } else if (Number(output) - 1 == num) {
    result.innerHTML += "Yaah just ONE  step BACK...";
  } else if (Number(output) - 2 == num) {
    result.innerHTML += "You have came TOO close just go BACKWARD...";
  } else if (Number(output) - 3 == num) {
    result.innerHTML += "You have came TOO close just go BACKWARD...";
  } else if (Number(output) - 4 == num) {
    result.innerHTML += "You have came TOO close just go BACKWARD...";
  } else if (Number(output) - 5 == num) {
    result.innerHTML += "You have came close just go BACKWARD...";
  } else if (Number(output) - 6 == num) {
    result.innerHTML += "You have came close just go BACKWARD...";
  } else if (Number(output) - 7 == num) {
    result.innerHTML += "You have came close just go BACKWARD...";
  } else if (Number(output) - 8 == num || Number(output) - 9 == num) {
    result.innerHTML += "You are Going close just TRY and go BACKWARD...";
  } else if (
    Number(output) - 10 == num ||
    Number(output) - 11 == num ||
    Number(output) - 12 == num ||
    Number(output) - 13 == num ||
    Number(output) - 14 == num
  ) {
    result.innerHTML +=
      "You are Going close to the number  .. just go BACKWARD...";
  } else if (
    Number(output) - 15 == num ||
    Number(output) - 16 == num ||
    Number(output) - 17 == num
  ) {
    result.innerHTML += "Go BACKWARD you are on the way..";
  } else if (Number(output) - 18 == num || Number(output) - 19 == num) {
    result.innerHTML += "You are going close .. just go BACKWARD ..";
  } else if (Number(output) - 20 == num) {
    result.innerHTML += "Try you can do it ... Go BACKWARD...";
  } else if (Number(output) == num) {
    result.innerHTML += "🎉🎉CONGRATULATION 🎉🎉 ... YOU WON THE GAME..";
    btn.style.display = "none";
    btn2.style.display = "flex";
  } else if (Number(output) - 20 > num || Number(output) + 20 < num) {
    result.innerHTML += "😐...TOO FAR..... TRY AGAIN ...😑";
  }
  input.value = "";
};

console.log(num);
