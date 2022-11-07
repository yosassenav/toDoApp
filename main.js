const inputList = document.getElementById("todoList");
const input = document.getElementById("inputForm");
const addButton = document.getElementById("addBtn");

addButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const toDo = document.createElement("div");
  toDo.innerText = input.value;
  toDo.classList.add(
    "container",
    "d-flex",
    "bg-light",
    "justify-content-between",
    "pt-3",
    "input-group",
    "mb-3"
  );
  inputList.appendChild(toDo);
  //console.log(inputList.innerHTML);
  const deleteButton = document.createElement("div");
  deleteButton.addEventListener("click", deleteItem(toDo));
  deleteButton.classList.add("d-flex", "btn", "btn-danger", "mb-3");
  deleteButton.innerText = "Eliminar tarea";
  toDo.appendChild(deleteButton);
});

//function to delete item from to-do list
const deleteItem = (item) => {
  console.log("elemento eleminado: ", item.innerText);
  //item.remove();
};
