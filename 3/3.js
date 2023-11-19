const renderTaskCondition_3 = () => {
  setContent(taskText3);
};
const taskText3 = `Варіант 10:
Перегляд набору зображень зі зміною підписів до зображень за допомогою
кнопок «Назад» та «Далі».`;
const taskButton_3 = createSubButton("Завдання", renderTaskCondition_3);


const renderResult_3 = () => {
  const content = getContent_3('public/1.jpg', '1 картинка');
  setContent(content);
};
const resultButton_3 = createSubButton("Результат", renderResult_3);

const renderJS_3 = async () => {
  const text = await getJSText_3();
  setContent(text, "text");
};
const getJSText_3 = () => fetch("3/3.solution.js").then((res) => res.text());
const jsButton_3 = createSubButton("JS", renderJS_3);

const ThirdLabButtons = () => {
  const html =
    taskButton_3 +
    resultButton_3 +
    jsButton_3;
  return html;
};
