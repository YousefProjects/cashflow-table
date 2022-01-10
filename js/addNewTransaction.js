const formEl = document.getElementById("form")
const amountEl = document.getElementById("amount")
const dateEl = document.getElementById("date")
const titleEl = document.getElementById("title")
const categoryEl = document.getElementById("category")
const errorMessage = document.getElementById("error-message")

// add new transaction to all transaction array
function addNewTransaction(e) {
  e.preventDefault()

  // define new transaction
  const newTransaction = {
    amount: +amountEl.value,
    date: dateEl.value,
    title: titleEl.value,
    category: categoryEl.value,
  }

  if (
    amount.value.trim() == 0 ||
    date.value.trim() == "" ||
    title.value.trim() === ""
  ) {
    const formControl = form.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = "*** please fill all fields"
  } else {
    allTransactions.push(newTransaction)
    console.log(allTransactions)
    updateCashFlow()
    updateCashInflowTable()
    // empty all fields
    errorMessage.innerText = ""
    amountEl.value = ""
    dateEl.value = ""
    titleEl.value = ""
  }
}

formEl.addEventListener("submit", addNewTransaction)
