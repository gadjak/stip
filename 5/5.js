const renderTaskCondition_5_1 = () => {
  setContent(taskText5_1);
};
const taskText5_1 = `5. За натисканням кнопки виводити модальне вікно з тестом +
текст із текстового поля (попередньо введений)`;
const taskButton_5_1 = createSubButton("Завдання 1", renderTaskCondition_5_1);

const renderTaskCondition_5_2 = () => {
  setContent(taskText_5_2);
};
const taskText_5_2 = `5. Заголовок червоного кольору рухається зліва направо,
зменшується і збільшується по 2 рази відповідно, поки
не дійде до правого краю`;
const taskButton_5_2 = createSubButton("Завдання 2", renderTaskCondition_5_2);

const renderTaskCondition_5_3 = () => {
  setContent(taskText_5_3);
};
const taskText_5_3 = `5. Додати на сторінку форму, що містить декілька елементів форми, при цьому при виборі певного значення в одному елементі (див. приклади):робити недоступним інший елемент (для непарних варіантів).`;
const taskButton_5_3 = createSubButton("Завдання 3", renderTaskCondition_5_3);



const renderResult_5_1 = () => {
  const content = getContent_5_1();
  setContent(content);
};
const resultButton_5_1 = createSubButton("Результат 1", renderResult_5_1);

const renderResult_5_2 = () => {
  setContent(content_5_2, 'without-border');
  animateTitle_5_2();
};
const resultButton_5_2 = createSubButton("Результат 2", renderResult_5_2);


const renderResult_5_3 = () => {
  setContent(content_5_3);
  setupCheckboxes();
};
const resultButton_5_3 = createSubButton("Результат 3", renderResult_5_3);



const renderJS_5 = async () => {
  const text = await getJSText_5();
  setContent(text, "text");
};
const getJSText_5 = () => fetch("5/5.solution.js").then((res) => res.text());
const jsButton_5 = createSubButton("JS", renderJS_5);


const LabButtons5 = () => {
  const html =
    taskButton_5_1 +
    taskButton_5_2 +
    taskButton_5_3 +
    resultButton_5_1 +
    resultButton_5_2 +
    resultButton_5_3 +
    jsButton_5;
  return html;
};
