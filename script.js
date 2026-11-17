const button = document.querySelector("#count")
let clicks = 0

button.addEventListener("click", () => {
  clicks++
  button.textContent = `Clicked ${clicks} ${clicks === 1 ? "time" : "times"}`
  console.log("Clicked", clicks)
})
