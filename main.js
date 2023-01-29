import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { v4 as uuidv4 } from "uuid";

// console.log(uuidv4())

const pid = document.querySelector("#pid");
const btnIncrease = document.querySelector("#btnIncrease");
const btnDecrease = document.querySelector("#btnDecrese");
const result = document.querySelector("#result");
var number = 0;
pid.innerHTML = uuidv4();

btnIncrease.addEventListener("click", () => {
  number += 1;
  result.innerHTML = number;
});

btnDecrease.addEventListener("click", () => {
  number -= 1;
  result.innerHTML = number;
});
