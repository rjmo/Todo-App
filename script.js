const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


class Todo{
  constructor(msg, id){
    this.id = id
    this.tordo = msg
  }
}


function newTodo() {
  
  var newValue = parseInt(itemCountSpan.textContent)
  newValue += 1
  itemCountSpan.textContent = newValue
  uncheckedCountSpan.textContent = newValue


  tod = prompt("New todo:")
  var er = new Todo(tod, newValue)
  console.log(er.id)


  var todoli = document.createElement('li')
  todoli.classList.add(classNames.TODO_ITEM)


  var btn = document.createElement('button')
  btn.innerHTML = "delete"
  console.log(btn)


  var checkboxInput = document.createElement('input')
  checkboxInput.setAttribute('type', 'checkbox')
  checkboxInput.setAttribute('onclick', 'countUnCheck()')
  checkboxInput.setAttribute('id', newValue)
  checkboxInput.classList.add(classNames.TODO_CHECKBOX)
  checkboxInput.checked = false
  
  list.insertBefore(todoli, list.firstChild)
  
  var td = document.getElementsByTagName("li")[0]
  td.innerHTML = er.tordo
  td.insertBefore(checkboxInput, td.firstChild)
  td.insertBefore(btn, td.firstChild[1])

  countUnCheck()

}

function countUnCheck()
{
  var counter = 0
  var checkbox = document.getElementsByClassName(classNames.TODO_CHECKBOX)

  for (let index = 0; index < checkbox.length; index++) {
    var x = checkbox[index].checked
    if (checkbox[index].checked == false) {
      counter += 1
    } 
  }
  
  uncheckedCountSpan.textContent = counter
}

