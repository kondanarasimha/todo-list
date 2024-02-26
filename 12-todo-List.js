const todoList = [{
  name: 'make dinner', 
  dueDate: '2022-12-22',}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
let todoListHTML = ``;

todoList.forEach((todoobject, index) => {
  const name = todoobject.name;
  const dueDate = todoobject.dueDate;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class="delete-todo-buttons js-delete-todo-button">Delete</button>`;
  todoListHTML += html 


});


  document.querySelector('.js-todo-list').innerHTML = todoListHTML; //calling the 'todoListHTML' because it store the html variable to make it change by using 'innerHTML'. 
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=> {
      deleteButton.addEventListener('click',()=> {
        todoList.splice(index, 1);
        renderTodoList(); 
      }); 

    });


}

document.querySelector('.js-add-todo-button')
  .addEventListener('click',()=> {
    addTodo();
  });

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,//here it is input value in the placeholder(text) property name we are reassing the name.
    dueDate: dueDate,//here it is input value of the date property name we are reassing the duedate input.
    //name,dueDate(shortcut for the above the statements)
  });

  inputElement.value = '';

  renderTodoList();

}

