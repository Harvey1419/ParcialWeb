$(document).ready(function () {
   const gustoButton = document.querySelector('#gustosbutton')
   let i = 1
   gustoButton.addEventListener('click',() => {
      const gusto  = document.querySelector('#gustos').value
      if(gusto !== ''){
         const table = document.querySelector('#tablagustos')
         const newTr = document.createElement('tr')
         newTr.setAttribute('id',`row${i}`)
         let buttonFunction = `editAndSend(row${i})`
         const row = `<tr id="row${i}"><td id="gustoTD">${gusto}</td><td>0</td><td> <button onclick="${buttonFunction}" type="button" id="${i}" class="btnEdit">editar</button> </td></tr>`
         newTr.innerHTML = row
         table.appendChild(newTr)
         i++;
      }
   })

  
});
let i = 0
function editAndSend(id) {
      document.getElementById('texto').innerText = 'Pulse aceptar para guardar los cambios o cancelar para anularlo'
      document.querySelector('#divBtn').innerHTML = '<div class="btn-group"><input id="aceptar" type="submit" value="Aceptar"/><button id="cancelar" type="button">Cancelar</button></div>'
      const gustoInput = id.querySelector('#gustoTD').innerText
      id.innerHTML = `<tr><td> <input id="gusto" name="gustos${i}" type="text" value=${gustoInput}></td><td> <input id="porcentaje" name="porcentaje${i}" type="number" value=0> </td><td>en edicion</td></tr>`
      i++
   }