const renderTaskCondition = () => {
    setContent(taskText);
};
const taskText = `Використовуючи структурну структуру створити багатосторінковий web-сайт для звітів щодо виконання лабораторних робіт.</div>`;
const taskButton = createSubButton("Завдання", renderTaskCondition);

const renderResult = () => {
    setContent(resultText);
}
const resultText  = `Результати виконання лабораторної робіт.`
const resultButton = createSubButton("Результат", renderResult)

const renderHTML = async () => {
    const text = await getHtmlText()
    setContent(text, "text");
}
const getHtmlText = () => fetch("index.html").then( (res) => res.text());
const htmlButton = createSubButton("HTML", renderHTML)


const FirstLabButtons = () => {
  const html = taskButton + resultButton + htmlButton;
  return html;
};
