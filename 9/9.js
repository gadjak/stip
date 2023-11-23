const renderTaskCondition_9 = () => {
  setContent(taskText9);
};
const taskText9 = `1) Створіть власні шаблони XSL. Як вихідний файл використовуйте
результати робіт 6 і 7.<br>
2) Виконайте сортування записів за одним із можливих критеріїв та
фільтрацію даних за одним із можливих показників`;
const taskButton_9 = createSubButton("Завдання", renderTaskCondition_9);


const renderResult_9 = () => {
  const content = getContent_9();
  setContent(content, );
};
const resultButton_9 = createSubButton("Результат", renderResult_9);

const renderXSL_9 = async () => {
  const text = await getXSLText_9();
  setContent(text, "text");
};
const getXSLText_9 = () => fetch("9/sort.xsl").then((res) => res.text());
const xslButton_9 = createSubButton("XSL 1", renderXSL_9);

const renderJS_9 = async () => {
  const text = await getJSText_9_1();
  setContent(text, "text");
};
const getJSText_9_1 = () => fetch("9/filter.xsl").then((res) => res.text());
const jsButton_9 = createSubButton("XSL 2", renderJS_9);

const LabButtons9 = () => {
  const html =
    taskButton_9 +
    resultButton_9 +
    xslButton_9 + 
    jsButton_9;
  return html;
};
