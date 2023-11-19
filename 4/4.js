const renderTaskCondition_4_1 = () => {
  setContent(taskText4_1);
};
const taskText4_1 = `1. Створити сторінку з динамічним змістом «Перевірка значень, введених користувачем поля форми для реєстрації»;. 
<br>Форма повинна містити поля «Ім'я», «Прізвище», «Найменування організації», «Номер кредитної картки», «Номер телефону», «Адреса електронної пошти», кнопки «Надіслати» та «Очистити».
<br>2. Здійснити перевірку заповненості даними всіх полів.
<br>3. Побудувати шаблон для перевірки даних кредитної картки з обмеженням кількості спроб неправильного введення даних трьома.
4. Остання перевірка має контролювати структуру та вміст полів (правильність введення імені та прізвища, номери телефону, електронної адреси.).`;
const taskButton_4_1 = createSubButton("Завдання 1", renderTaskCondition_4_1);

const renderTaskCondition_4_2 = () => {
  setContent(taskText4_2);
};
const taskText4_2 = `20. Дано рядок 'aaa aaa aaa'. Напишіть регулярний вираз, який
замінить останній 'aaa' на '!'.`;
const taskButton_4_2 = createSubButton("Завдання 2", renderTaskCondition_4_2);

const renderResult_4_1 = () => {
  const content = getContent_4_1();
  setContent(content);
};
const resultButton_4_1 = createSubButton("Результат 1", renderResult_4_1);

const renderResult_4_2 = () => {
  setContent(content_4_2, 'without-border');
};
const resultButton_4_2 = createSubButton("Результат 2", renderResult_4_2);

const renderJS_4 = async () => {
  const text = await getJSText_4();
  setContent(text, "text");
};
const getJSText_4 = () => fetch("4/4.solution.js").then((res) => res.text());
const jsButton_4 = createSubButton("JS", renderJS_4);

const LabButtons4 = () => {
  const html =
    taskButton_4_1 +
    taskButton_4_2 +
    resultButton_4_1 +
    resultButton_4_2 +
    jsButton_4;
  return html;
};
