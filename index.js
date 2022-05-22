const totalBill = document.getElementById("total-bill")
const numberOfPeople = document.getElementById("number-people")

const tip5 = document.getElementById("tip5")
const tip10 = document.getElementById("tip10")
const tip15 = document.getElementById("tip15")
const tip25 = document.getElementById("tip25")
const tip50 = document.getElementById("tip50")

const displayTip = document.getElementById("display-tip")
const displayTotal = document.getElementById("display-total")

const resetBtn = document.getElementById("reset-btn")

// EVENT LISTENERS

tip5.addEventListener("click", (e) => {
  //   console.log(e.target)
  calculateBill(0.05)
})

tip10.addEventListener("click", (e) => {
  calculateBill(0.1)
})

tip15.addEventListener("click", (e) => {
  calculateBill(0.15)
})

tip25.addEventListener("click", (e) => {
  calculateBill(0.25)
})

tip50.addEventListener("click", (e) => {
  calculateBill(0.5)
})

//  CALCULATE BILL
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
})

const calculateBill = (num) => {
  const people = Number(numberOfPeople.value)

  const tip = Number(totalBill.value)
  const tipValue = (tip * num).toFixed(2) / people

  const bill = Number(totalBill.value)
  const total = (bill * (1 + num)).toFixed(2) / people
  console.log(total)

  displayTip.innerHTML = `${formatter.format(tipValue)}`
  displayTotal.innerHTML = `${formatter.format(total)}`
}

// Reset App
resetBtn.addEventListener("click", () => {
  console.log("Clicked")
  totalBill.value = ""
  numberOfPeople.value = ""

  displayTip.innerHTML = "$0.00"
  displayTotal.innerHTML = "$0.00"
})
