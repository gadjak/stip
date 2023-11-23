const renderTaskCondition_7 = () => {
  setContent(taskText7, 'text');
};
const taskText7 = `Варіант 2
Інформація про співробітників фірми:
- прізвище;
- Ім'я;
- По-батькові;
- адреса:
- індекс;
- тип населеного пункту (місто, селище, село);
- область;
- район;
- назва населеного пункту;
- вулиця;
- будинок;
- корпус ( наявність необов'язково );
- квартира;
- Телефон:
- домашній;
- мобільний ( може бути кілька );
- Посада;
- Підрозділ.`;
const taskButton_7 = createSubButton("Завдання", renderTaskCondition_7);


const renderResult_7 = () => {
  const content = getContent_7();
  setContent(content);
  displayXml_7();
};
const resultButton_7 = createSubButton("Результат", renderResult_7);

const renderJS_7 = async () => {
  const text = await getJSText_7();
  setContent(text, "text");
};
const getJSText_7 = () => fetch("7/7.solution.js").then((res) => res.text());
const jsButton_7 = createSubButton("JS", renderJS_7);

const renderXML_7 = async () => {
  const text = await getXMLText_7();
  setContent(text, "text");
};
const getXMLText_7 = () => fetch("7/employees.xml").then((res) => res.text());
const xmlButton_7 = createSubButton("XML", renderXML_7);


const renderXML_8 = async () => {
  const text = `<img height="1000" src="assets/diagram.jpg" alt="XML" />`;
  setContent(text);
};
//const getXMLText_8 = () => fetch("8/employees.xml").then((res) => res.text());
const xmlButton_8 = createSubButton("Статична схема", renderXML_8);


const LabButtons7 = () => {
  const html =
    taskButton_7 +
    resultButton_7 +
    jsButton_7 +
    xmlButton_7 +
    xmlButton_8;
  return html;
};
