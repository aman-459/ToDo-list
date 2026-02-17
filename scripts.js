let todoList = [
    {
        item: '',
        dueDate: '',
    },
];

let todoStr = localStorage.getItem('todoList');
if (todoStr) {
    todoList = JSON.parse(todoStr);
} else {
    todoList = [];
};

displayItems();

let inputElement = document.querySelector('#todo-input');
inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});


function addTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    let inputElement = document.querySelector('#todo-input');
    let dateEment = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateEment.value;
    if (todoItem === '') {
        alert('Please enter a todo item.');
        return;
    }
    if (todoDate === '') {
        todoDate = new Date().toLocaleDateString();
    }
    todoList.push({
        item: todoItem,
        dueDate: todoDate
    });
    inputElement.value = '';
    dateEment.value = '';
    displayItems();
    console.log(todoItem);
    console.log(todoList);
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    containerElement.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `<span>${item}</span>
        <span>${dueDate}</span>
            <button id="delete-btn" onclick="todoList.splice(${i}, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            displayItems();"> Delete </button >
            ` ;
    }
    containerElement.innerHTML = newHtml;
}