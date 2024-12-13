// TASK-2: Yeni görev ekleme
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

      
       const deleteBtn = document.createElement('button');
       deleteBtn.textContent = 'Sil';
       deleteBtn.addEventListener('click', () => li.remove());

       li.appendChild(deleteBtn);
       taskList.appendChild(li);

       taskInput.value = '';
    }
});
