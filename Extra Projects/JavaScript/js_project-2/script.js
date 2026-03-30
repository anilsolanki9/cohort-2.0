let tasksData = { todo: [], progress: [], done: [] };
const allTaskColumns = document.querySelectorAll(".task-column");
// Modal logics
const toggleModalBtn = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");

let dragElement = null;

function createTask(title, desc) {
  let task = document.createElement("div");
  task.draggable = true;
  task.classList.add("task");

  task.innerHTML = `<h2 class="task-title">${title}</h2>
            <p>${desc}</p>
            <button id="delete-btn">Delete</button>`;
  return task;
}

function modalHandlling() {
  toggleModalBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
  });

  modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  const addTaskBtn = document.querySelector("#add-new-task");

  addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title").value;
    const taskDesc = document.querySelector("#task-desc").value;

    tasksData["todo"].push({ title: taskTitle, desc: taskDesc });
    saveToDB();
    renderTasks();

    modal.classList.remove("active");
  });
}

modalHandlling();

function saveToDB() {
  localStorage.setItem("tasksData", JSON.stringify(tasksData));
}

function getFromDB() {
  return JSON.parse(localStorage.setItem("tasksData"));
}

function renderTasks() {
  console.log(tasksData)
  allTaskColumns.forEach((taskColumn) => {
    let columnTasks = tasksData[taskColumn]; // array of all tasks objects
    columnTasks.forEach((task) => {
      taskColumn.appendChild(createTask(task.title, task.desc));
    });
  });
}

// function addEventsOnTasks() {
//   const tasks = document.querySelectorAll(".task");
//   tasks.forEach((task) => [
//     task.addEventListener("click", () => {
//       console.log("clicked");
//     }),
//   ]);
// }

// addEventsOnTasks()

function manageColumns() {
  allTaskColumns.forEach((taskColumn) => {
    let count = taskColumn.querySelector(".right");
    let allTasks = taskColumn.querySelectorAll(".task");

    // let columnTasksData = tasksData[taskColumn.id];
    // taskColumn.innerHTML = columnTasksData.map((task) => {
    //   return `<div draggable="true" class="task">
    //         <h2 class="task-title">${task.title}</h2>
    //         <p>${task.desc}</p>
    //         <button id="delete-btn">Delete</button>
    //       </div>`;
    // });

    // // array => tasksData[taskColumn.id]
    // tasksData[taskColumn.id] = Array.from(allTasks).map((t) => {
    //   return { title: t.querySelector("h2").innerText.trim(), desc: t.querySelector("p").innerText.trim() };
    // });

    taskColumn.addEventListener("dragenter", (e) => {
      taskColumn.classList.add("hover-over");
    });

    taskColumn.addEventListener("dragleave", (e) => {
      taskColumn.classList.remove("hover-over");
    });

    taskColumn.addEventListener("dragover", (e) => {
      taskColumn.classList.add("hover-over");
      e.preventDefault();
    });

    taskColumn.addEventListener("drop", (e) => {
      taskColumn.classList.remove("hover-over");
      tasksData[taskColumn.id].push({ title: dragElement.querySelector("h2").innerText, desc: dragElement.querySelector("p").innerText });
      saveToDB();
      renderTasks();
      manageColumns();
    });

    let num = allTasks.length;
    count.innerHTML = num;

    allTasks.forEach((task) => {
      task.addEventListener("drag", (e) => {
        dragElement = task;
      });

      task.addEventListener("click", (e) => {
        if (e.target.id == "delete-btn") {
        }
      });
    });
  });

  localStorage.setItem("tasksData", JSON.stringify(tasksData));
}

manageColumns();
