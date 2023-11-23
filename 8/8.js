const renderTaskCondition_8 = () => {
  setContent(taskText8);
};
const taskText8 = `1. Створити опис структури документа XML за допомогою DTD-схеми.
<br>
2. Виконати опис структури документа XML за допомогою XML Schema .`;
const taskButton_8 = createSubButton("Завдання", renderTaskCondition_8);


const renderResult_8 = () => {
  const content = getContent_8();
  setContent(content, "text");
  setupAnimation();
};
const resultButton_8 = createSubButton("DTD схема", renderResult_8);

const renderJS_8 = async () => {
  const text = await getJSText_8();
  setContent(text, "text");
};
const getJSText_8 = () => fetch("8/xml.txt").then((res) => res.text());
const jsButton_8 = createSubButton("Опис структури документа XML", renderJS_8);

const LabButtons8 = () => {
  const html =
    taskButton_8 +
    resultButton_8 +
    jsButton_8;
  return html;
};
