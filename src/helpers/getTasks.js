const owners = ["64ef0ce090ff7bcd7e528d14"];
const priorities = ["LOW", "MEDIUM", "HIGH"];
const categories = ["TODO", "INPROGRESS", "DONE"];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomTime() {
  const hour = String(Math.floor(Math.random() * 24)).padStart(2, "0");
  const minute = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  return `${hour}:${minute}`;
}

function generateRandomDate() {
  const year = 2023;
  const month = String(Math.floor(Math.random() * 2) + 8).padStart(2, "0");
  const day = String(Math.floor(Math.random() * 30) + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function generateRandomTask() {
  const title = `Task ${Math.random().toString(36).substring(2, 8)}`;
  const start = generateRandomTime();
  const end = generateRandomTime();
  const priority = getRandomElement(priorities);
  const date = generateRandomDate();
  const category = getRandomElement(categories);
  const owner = getRandomElement(owners);

  const task = {
    title: title,
    start: start,
    end: end,
    priority: priority,
    date: date,
    category: category,
    owner: owner,
  };

  return task;
}

const tasks = Array.from({ length: 200 }, generateRandomTask);
module.exports = { tasks };
