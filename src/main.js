import { useState } from "react";

const mainButton = document.querySelector(".button1");


function ClickMonitor() {
  const [time, setTime] = useState("")
  let time2 = new Date().parse
  console.log(time2)
  console.log("Hello World")
}

mainButton.addEventListener("click", console.log("Ola"))