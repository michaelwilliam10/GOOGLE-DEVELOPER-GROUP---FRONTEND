document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const ascBtn = document.getElementById("asc-btn");
  const descBtn = document.getElementById("desc-btn");
  const switchBtn = document.getElementById("switch-mode");

  let todos = [];
  let idCounter = 1;

  //Render Todo
  function renderTodo(data) {
    todoList.innerHTML = "";

    data.forEach(todo => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>${todo.id}. ${todo.text}</span>
        <button class="btn btn-secondary" onclick="deleteTodo(${todo.id})">
          Delete
        </button>
      `;

      todoList.appendChild(li);
    });
  }

  //Add Todo
  addBtn.addEventListener("click", () => {
    if (todoInput.value.trim() === "") return;

    todos.push({
      id: idCounter++,
      text: todoInput.value
    });

    todoInput.value = "";
    renderTodo(todos);
  });

  //Delete Todo
  window.deleteTodo = function (id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodo(todos);
  };

  //Sort Ascending
  ascBtn.addEventListener("click", () => {
    const asc = [...todos].sort((a, b) => a.id - b.id);
    renderTodo(asc);
  });

  //Sort Descending
  descBtn.addEventListener("click", () => {
    const desc = [...todos].sort((a, b) => b.id - a.id);
    renderTodo(desc);
  });

  //Dark Mode
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
