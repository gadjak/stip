const renderTaskCondition_2_1 = () => {
  setContent(taskText2_1);
};
const taskText2_1 = `Варіант 6. Вертикальне дворівневе меню, що розкривається при натисканні лівою
кнопкою миші. Другий рівень меню ховається при повторному натисканні на вибраному
пункті.`;
const taskButton_2_1 = createSubButton("Завдання 1", renderTaskCondition_2_1);

const renderTaskCondition_2_2 = () => {
  setContent(taskText2_2);
};
const taskText2_2 = `Варіант 8. Організуйте рух зображення праворуч наліво.`;
const taskButton_2_2 = createSubButton("Завдання 2", renderTaskCondition_2_2);

const renderResult_2_1 = () => {
  const content = getContent_2_1();
  setContent(content);
  addMenuListeners_2_1();
};
const resultButton_2_1 = createSubButton("Результат 1", renderResult_2_1);

const renderResult_2_2 = () => {
  setContent(content_2_2, 'without-border');
  moveImageToLeft_2_2();
};
const resultButton_2_2 = createSubButton("Результат 2", renderResult_2_2);

const renderJS_2 = async () => {
  const text = await getJSText_2();
  setContent(text, "text");
};
const getJSText_2 = () => fetch("2/2.solution.js").then((res) => res.text());
const jsButton_2 = createSubButton("JS", renderJS_2);

const SecondLabButtons = () => {
  const html =
    taskButton_2_1 +
    taskButton_2_2 +
    resultButton_2_1 +
    resultButton_2_2 +
    jsButton_2;
  return html;
};
