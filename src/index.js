document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page refresh

    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = taskDescription;

      taskList.appendChild(li);
      form.reset(); // Clear the input field
    }
  });
});