const plusBtn = document.querySelectorAll('.plusBtn')
const minusBtn = document.querySelectorAll('.minusBtn')
const firstClassTPrice = +document.getElementById('firstClassTPrice').innerText
const economyTPrice = +document.getElementById('economyTPrice').innerText
const bookNow = document.getElementById('bookNow')
let vatPercentage = 10
let subTotal = 350
let totalVatCost = (subTotal * vatPercentage) / 100
let total = subTotal + totalVatCost

document.getElementById('subTotal').innerText = subTotal
document.getElementById('totalVat').innerText = totalVatCost
document.getElementById('total').innerText = total

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
          'economyTGroup',
        )
      ) {
        checkType(type, 'economyTCount')
      }
      let firstClassTCount = +document.getElementById('firstClassTCount').value
      let economyTCount = +document.getElementById('economyTCount').value
      let firstClassTotal = firstClassTPrice * firstClassTCount
      let economyTotal = economyTPrice * economyTCount
      console.log(firstClassTotal, economyTotal)
      subTotal = firstClassTotal + economyTotal

      totalVatCost = (subTotal * vatPercentage) / 100
      total = subTotal + totalVatCost
      document.getElementById('subTotal').innerText = subTotal
      document.getElementById('totalVat').innerText = totalVatCost
      document.getElementById('total').innerText = total
    })
  }
}
let increment = checkingAll(plusBtn, 'inc')
let decrement = checkingAll(minusBtn, 'dec')
document.getElementById('vat').innerText = vatPercentage
bookNow.addEventListener('click', function () {
  document.getElementById('firstClassTBook').innerText = parseFloat(
    document.getElementById('firstClassTCount').value,
  )
  document.getElementById('economyTBook').innerText = parseFloat(
    document.getElementById('economyTCount').value,
  )
  document.getElementById('bill').innerText = '$' + total
  document.querySelector('.congrats').style.display = 'flex'
})
document.getElementById('closCongrats').addEventListener('click', function () {
  document.querySelector('.congrats').style.display = 'none'
})
