const renderTaskCondition_10 = () => {
  setContent(taskText10);
};
const taskText10 = `1. Завантажте документ XML, розроблений у попередніх роботах, в об&#39;єкт
документа та відобразіть у вікні браузера.<br>
2. Використовуючи методи DOM XML, сформуйте HTML-сторінку, що містить
таблицю з кількох стовпців .<br>
3. Використовуючи методи DOM XML, замініть цифрові значення їх словесними
еквівалентами.`;
const taskButton_10 = createSubButton("Завдання", renderTaskCondition_10);


const renderResult_10 = () => {
  const content = getContent_10_1(1);
  setContent(content);
};
const resultButton_10 = createSubButton("Результат", renderResult_10);

const renderResult_10_1 = () => {
  const content = getContent_10_1(2);
  setContent(content);
};
const resultButton_10_1 = createSubButton("Результат 2", renderResult_10_1);

const renderResult_10_2 = () => {
  const content = getContent_10_1(3);
  setContent(content);
};
const resultButton_10_2 = createSubButton("Результат 3", renderResult_10_2);

const renderJS_10 = async () => {
  const text = await getJSText_11();
  setContent(text, "text");
};
const getJSText_11 = () => fetch("10/10.solution.js").then((res) => res.text());
const jsButton_10 = createSubButton("JS", renderJS_10);

const LabButtons10 = () => {
  const html =
    taskButton_10 +
    resultButton_10 +
    resultButton_10_1 +
    resultButton_10_2 +
    jsButton_10;
  return html;
};
