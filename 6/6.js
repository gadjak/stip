const renderTaskCondition_6 = () => {
  setContent(taskText6);
};
const taskText6 = `6. Чорний квадрат 
<br>1. Відображається у центрі вікна
браузера
<br>2. Рухається вниз до нижньої
межі вікна браузера
<br>3. Рухається до верхньої межі
вікна браузера
<br>4. Плавно зникає
<br>5. Плавно з&#39;являється
<br>6. Змінює колір на зелений`;
const taskButton_6 = createSubButton("Завдання", renderTaskCondition_6);


const renderResult_6 = () => {
  const content = getContent_6();
  setContent(content, "without-border");
  setupAnimation();
};
const resultButton_6 = createSubButton("Результат", renderResult_6);

const renderJS_6 = async () => {
  const text = await getJSText_6();
  setContent(text, "text");
};
const getJSText_6 = () => fetch("6/6.solution.js").then((res) => res.text());
const jsButton_6 = createSubButton("JS", renderJS_6);

const LabButtons6 = () => {
  const html =
    taskButton_6 +
    resultButton_6 +
    jsButton_6;
  return html;
};
