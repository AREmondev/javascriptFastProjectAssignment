const plusBtn = document.querySelectorAll('.plusBtn')
const minusBtn = document.querySelectorAll('.minusBtn')
const firstClassTPrice = +document.getElementById('firstClassTPrice').innerText
const classicTPrice = +document.getElementById('classicTPrice').innerText
let vatPercentage = 10

function checkType(type, item) {
  let ticketCount = parseFloat(document.getElementById(item).value)

  if (type == 'inc') {
    if (ticketCount >= 10) {
      alert('One Person can book only less then 10 ticket in on category')
    } else {
      ticketCount++
    }
  } else if (type == 'dec') {
    if (ticketCount == 0) {
      alert("ticketCount didn't have negative number")
    } else {
      ticketCount--
    }
  }
  document.getElementById(item).value = ticketCount
}
function checkingAll(btn, type) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
      if (
        e.target.parentElement.parentElement.parentElement.classList.contains(
          'firstClassTGroup',
        )
      ) {
        checkType(type, 'firstClassTCount')
      } else if (
        e.target.parentElement.parentElement.parentElement.classList.contains(
          'classicTGroup',
        )
      ) {
        checkType(type, 'classicTCount')
      }
      let firstClassTCount = +document.getElementById('firstClassTCount').value
      let classicTCount = +document.getElementById('classicTCount').value
      let firstClassTotal = firstClassTPrice * firstClassTCount
      let classicTotal = classicTPrice * classicTCount
      console.log(firstClassTotal, classicTotal)
      let subTotal = firstClassTotal + classicTotal

      let totalVatCost = (subTotal * vatPercentage) / 100
      let total = subTotal + totalVatCost
      document.getElementById('subTotal').innerText = subTotal
      document.getElementById('totalVat').innerText = totalVatCost
      document.getElementById('total').innerText = total
    })
  }
}
let increment = checkingAll(plusBtn, 'inc')
let decrement = checkingAll(minusBtn, 'dec')
document.getElementById('vat').innerText = vatPercentage
