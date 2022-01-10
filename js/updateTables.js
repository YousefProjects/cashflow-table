const cashInflowTbody = document.getElementById("cash-inflow")
const cashOutflowTbody = document.getElementById("cash-outflow")
const totalCashInflowRow = document.getElementById("total-cash-inflow-row")
const totalCashOutflowRow = document.getElementById("total-cash-outflow-row")
const cashFlowTotalRow = document.getElementById("cashflow-row")

function updateCashInflowTable(providedData = allTransactions) {
  cashInflowTbody.innerHTML = ""
  providedData.forEach((item) => {
    if (item.amount > 0) {
      const tableRowEl = document.createElement("tr")
      tableRowEl.innerHTML = `
    <td>${item.title}</td>
    <td>${item.date}</td>
    <td>${item.category}</td>
    <td>${item.amount}</td>
    `
      cashInflowTbody.appendChild(tableRowEl)
    } else {
      const tableRowEl = document.createElement("tr")
      tableRowEl.innerHTML = `
    <td>${item.title}</td>
    <td>${item.date}</td>
    <td>${item.category}</td>
    <td>${item.amount}</td>
    `
      cashOutflowTbody.appendChild(tableRowEl)
    }
  })
}

function updateCashFlow(providedData = allTransactions) {
  cashInflowTbody.innerHTML = ""
  cashOutflowTbody.innerHTML = ""
  totalCashInflowRow.innerHTML = ""
  totalCashOutflowRow.innerHTML = ""
  cashFlowTotalRow.innerHTML = ""

  // all mounts in the list
  const amounts = providedData.map((transaction) => transaction.amount)
  // calculate balance, income , expense
  const cashInFlow = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
  const cashOutFlow =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  const total = cashInFlow + cashOutFlow

  // print them in the console
  // console.log("amounts =", amounts)
  // console.log("cashInFlow =", cashInFlow)
  // console.log("cashOutFlow =", cashOutFlow)
  // console.log("total =", total)

  // render the results
  const cashInflowRow = document.createElement("tr")
  cashInflowRow.innerHTML = `
    <td colspan='3'><strong>Total Cash Inflow</strong></td>
    <td>${cashInFlow}</td>
    `
  totalCashInflowRow.appendChild(cashInflowRow)

  const cashOutFlowRow = document.createElement("tr")
  cashOutFlowRow.innerHTML = `
  <td colspan='3'><strong>Total Cash Inflow</strong></td>
  <td>${cashOutFlow}</td>
    `
  totalCashOutflowRow.appendChild(cashOutFlowRow)

  const cashFlowRow = document.createElement("tr")
  cashFlowRow.innerHTML = `
  <td colspan='3' style='width:75%;'>Cashflow</td>
  <td>${total}</td>
    `
  cashFlowTotalRow.appendChild(cashFlowRow)
}

updateCashFlow()
updateCashInflowTable()
