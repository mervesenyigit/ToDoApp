// TASK-2: Yeni görev ekleme
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

       
    }
});
