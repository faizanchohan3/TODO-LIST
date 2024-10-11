var inp = document.getElementById("input-box");
function addTask() {
  // appnd li
  if (inp.value === "") {
    alert("dd");
  } else {
    const task = inp.value.trim();
    const li = document.createElement("li");

    li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;
    var ul = document.getElementById("list-container");
    ul.appendChild(li);
    inp.value = "";
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function () {
      li.classList.toggle("completed", checkbox.checked);
    });


    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
          taskSpan.textContent = update;
          li.classList.remove("completed");
        }
      });

      deleteBtn.addEventListener("click", function () {
       
         this.parentNode.style.display="none";
        
      });


      const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");


function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks =
      document.querySelectorAll("li:not(.completed)").length;
  
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
  }
    // Assigning the attributes to created checkbox

    // Assigning the attributes to created button

    //Appn all Attribus

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        //add the function below
        updateCounters();
      });
  }
}
