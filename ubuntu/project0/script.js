const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let userInput = prompt  ('Enter a New TODO Task', 'New Task')

  var newItem = document.createElement('li')
  newItem.classname = classNames['TODO_ITEM']

  var checkBox = document.createElement('INPUT')
  checkBox.setAttribute("type","checkbox")
  checkBox.setAttribute("onclick","updateCount()")
  checkBox.className = classNames['TODO_CHECKBOX']

  var label = document.createElement('label')
  label.className = classNames['TODO_TEXT']
  label.innerHTML = userInput

  var delButton = document.createElement('button')
  delButton.innHTML = "delete"
  delButton.setAttribute('onclick', "deleteItem(This)")
  delButton.className = classNames['TODO_DELETE']

  newItem.appendChild(checkBox)
  newItem.appendChild(label)
  newItem.appendChild(delbutton)

  list.appendChild(newItem)

  updateCount()
}

function deleteItem(btn) {
   btn.parentNode.parentNode.removeChild(btn.parentNode)

   updateCount()
}

function updateCount() {

   let itemCount = 0
   let uncheckedItemCount = 0
   let allItems = document.getElementbyTagName('li')
   itemCount = allItems.length

   for (let i=0; i<itemCount; i++) {

      if (allItems[i].firstChild.checked == false) {
         uncheckedItemCount++
      }
   }
}