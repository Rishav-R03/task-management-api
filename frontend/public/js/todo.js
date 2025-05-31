// In a real application, you would fetch your tasks and then
// loop through them, creating a new task item for each.

// Get a reference to where you want to append tasks (e.g., a container div)
const tasksContainer = document.createElement('div');
tasksContainer.id = 'tasksContainer';
tasksContainer.className = 'flex flex-col items-center w-full';
document.body.appendChild(tasksContainer); // Append to body for demonstration

// Example task data (from your model)
const sampleTask = {
    _id: '683a882a558a8e04d48a8906',
    title: 'Dockerize the application',
    description: 'Dockerize the backend api application and deploy on ec2',
    isCompleted: true // Set to true for demonstration
};

function createTaskElement(task) {
    // Create a new div element for the task
    const taskDiv = document.createElement('div');
    taskDiv.className = 'w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-4';
    taskDiv.setAttribute('data-task-id', task._id); // Store task ID as a data attribute

    taskDiv.innerHTML = `
                <div class="flex-grow">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${task.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${task.description}</p>
                    <span class="hidden">${task._id}</span>
                </div>
                <div class="flex flex-col items-end space-y-3">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 rounded-md transition duration-150 ease-in-out" ${task.isCompleted ? 'checked' : ''}>
                        <span class="ml-2 text-gray-700 text-sm font-medium">Completed</span>
                    </label>
                    <button class="delete-task-btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Delete Task
                    </button>
                </div>
            `;

    // Add event listener to the checkbox
    const checkbox = taskDiv.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (event) => {
        console.log(`Task "${task.title}" completion status changed to: ${event.target.checked}`);
        // Here you would typically send an API call to update the task's isCompleted status in your backend
    });

    // Add event listener to the delete button
    const deleteButton = taskDiv.querySelector('.delete-task-btn');
    deleteButton.addEventListener('click', () => {
        console.log(`Delete task with ID: ${task._id}`);
        // Here you would typically send an API call to delete the task from your backend
        taskDiv.remove(); // Remove the task element from the DOM
    });

    return taskDiv;
}

// Append the sample task to the container
tasksContainer.appendChild(createTaskElement(sampleTask));

// You can add more tasks like this:
const anotherTask = {
    _id: 'anotherId123',
    title: 'Write project report',
    description: 'Complete the final project report for the Q2 review.',
    isCompleted: false
};
tasksContainer.appendChild(createTaskElement(anotherTask));
