import { TaskData } from "../models/taskData.js";

const btnDate = document.getElementById(
  "btn-date-form"
) as HTMLInputElement | null;
const taskInput = document.getElementById(
  "task-input"
) as HTMLInputElement | null;
const inputDate = document.getElementById(
  "task-date"
) as HTMLInputElement | null;

let taskTitle = "Une Note";
let taskDate: Date = new Date();
let formResult: TaskData = {
  id: "",
  taskDate: new Date(),
  taskTitle: "",
  taskStatus: false,
};

btnDate?.addEventListener("click", () => {
  inputDate?.showPicker();
});

const setFormResult = (idGenerator: string) => {
  if (taskInput?.value) {
    taskTitle = taskInput.value;
  }

  if (inputDate?.value) {
    taskDate = new Date(inputDate?.value);
  }

  formResult = {
    id: idGenerator,
    taskDate: taskDate,
    taskTitle: taskTitle,
    taskStatus: false,
  };
};

const clearForm = () => {
  if (taskInput?.value) {
    taskInput.value = "";
  }

  taskTitle = "Une Note"; 
  //@TODO  DELETE THAT DATE YO
  // if (inputDate) {
  //   inputDate = null;
  // }
};

export { formResult, clearForm, setFormResult };
