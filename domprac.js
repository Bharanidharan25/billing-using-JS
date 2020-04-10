var len=0
var l=document.getElementById('itemsLength')
let serialNumber = 0
var total= 0
const input = document.querySelectorAll('input[type=text] ,input[type=number]')

function addList(){
  const table = document.getElementsByClassName('tableBody')[0]
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const a = document.createElement('a')
  const i = document.createElement('i')
  a.href='#'
  i.className = 'fa fa-trash-o fa-1x'
  a.className = 'btn btn-sq-xs btn-danger'
  a.appendChild(i)
  a.onclick = deleteItem
  td.textContent = serialNumber+1
  tr.appendChild(td)
  
  for (let item of input){
    const td = document.createElement('td')
    td.textContent = item.value
    tr.appendChild(td)
  }

  tr.appendChild(document.createElement('td').appendChild(a))
  total = total + (input[2].value * input[1].value)
  serialNumber+=1 
  table.appendChild(tr)
  const price = document.getElementsByClassName('totalPrice')[0]
  price.textContent = 'The total Price is '+total
}

function deleteItem(e){
  const td = e.currentTarget.parentElement
  const tbody = document.getElementsByClassName('tableBody')[0]
  tbody.removeChild(td)
  total = total - (input[2].value * input[1].value)
  const price = document.getElementsByClassName('totalPrice')[0]
  price.textContent = 'The total Price is '+total
}


