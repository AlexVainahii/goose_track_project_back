const owners = ["64ef0ce090ff7bcd7e528d14"];
const priorities = ["LOW", "MEDIUM", "HIGH"];
const categories = ["TODO", "INPROGRESS", "DONE"];
const tasksTitle = [
  "Заспокоїти Публіку",
  "Знищення Військ Таноса",
  "Викрадення Інфініті Каменів",
  "Подорож у минуле або майбутнє",
  "Запобігти Розширенню Таноса",
  "Скасувати Часові Зміни",
  "Захистити Лідерів Світу",
  "Врятувати В'язнів Таноса",
  "Вирушити на Космічний Корабель Таноса",
  "Зламати Коди Таноса",
  "Знайти Завісу Зі Світу Таноса",
  "Використовувати Магію",
  "Захопити Секретні Зброї Таноса",
  "Співпрацювати з Іншими Групами Героїв",
  "Розкрити Таємниці Таноса",
  "Підготувати Пастки",
  "Знайти Інших Перців",
  "Підкріпити Захисні Лінії",
  "Спостерігати За Діями Таноса",
  "Звернутися до Верховних Сил",
  "Відправити Розвідку на Територію Таноса",
  "Підготувати Військові Запаси",
  "Запустити Спеціальний Комп'ютерний Аналіз",
  "Захистити Землю Від Прибульців",
  "Співпрацювати із ШПЕРІ",
  "Розкрити Плани Таноса",
  "Рятувати Міста від Руйнувань",
  "Захистити Світ Від Загибелі",
  "Приготувати Артефакти для Битви",
  "Відновити Сили та Енергію",
  "Збудувати Неймовірний Збройний Комплекс",
];

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
  const title = tasksTitle[Math.floor(Math.random() * tasksTitle.length)];
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
