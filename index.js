const totalBill = document.getElementById("total-bill")
const numberOfPeople = document.getElementById("number-people")

const tip5 = document.getElementById("tip5")
const tip10 = document.getElementById("tip10")
const tip15 = document.getElementById("tip15")
const tip25 = document.getElementById("tip25")
const tip50 = document.getElementById("tip50")

const customTip = document.getElementById("custom-value")
const warningMsg = document.getElementById("warning")

const displayTip = document.getElementById("display-tip")
const displayTotal = document.getElementById("display-total")

const resetBtn = document.getElementById("reset-btn")

// EVENT LISTENERS

tip5.addEventListener("click", (e) => {
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

customTip.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    calculateCustomBill(e.target.value)
  }
})

//  CALCULATE BILL
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
})

const calculateBill = (num) => {
  resetBtn.classList.remove("reset-inactive")

  if (numberOfPeople.value == 0) {
    warningMsg.style.display = "block"

    displayTip.innerHTML = "$0.00"
    displayTotal.innerHTML = "$0.00"
  } else if (numberOfPeople != 0) {
    warningMsg.style.display = "none"

    const people = Number(numberOfPeople.value)

    const tip = Number(totalBill.value)
    const tipValue = (tip * num) / people

    const bill = Number(totalBill.value)
    const total = (bill * (1 + num)) / people
    console.log(total)

    displayTip.innerHTML = `${formatter.format(tipValue)}`
    displayTotal.innerHTML = `${formatter.format(total)}`
  }
}

// CUSTOM TIP - CALCULATE BILL
const calculateCustomBill = (num) => {
  resetBtn.classList.remove("reset-inactive")

  if (numberOfPeople.value == 0) {
    warningMsg.style.display = "block"

    displayTip.innerHTML = "$0.00"
    displayTotal.innerHTML = "$0.00"
  } else if (numberOfPeople.value != 0) {
    warningMsg.style.display = "none"

    const people = Number(numberOfPeople.value)

    const tip = Number(num)

    const tipValue = tip / people

    const bill = Number(totalBill.value)
    const total = (bill + tip) / people

    displayTip.innerHTML = `${formatter.format(tipValue)}`
    displayTotal.innerHTML = `${formatter.format(total)}`
  }
}

// RESET APP
resetBtn.addEventListener("click", () => {
  totalBill.value = ""
  numberOfPeople.value = ""
  customTip.value = ""

  displayTip.innerHTML = "$0.00"
  displayTotal.innerHTML = "$0.00"

  resetBtn.classList.add("reset-inactive")
})
