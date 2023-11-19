const content_4_1 = `
<form class="t4-form" id="registrationForm" onsubmit="return validateForm(event)">
<label for="firstName">Ім'я:</label>
<input type="text" id="firstName" name="firstName" required>

<label for="lastName">Прізвище:</label>
<input type="text" id="lastName" name="lastName" required>

<label for="organization">Найменування організації:</label>
<input type="text" id="organization" name="organization" required>

<label for="creditCard">Номер кредитної картки:</label>
<input type="text" id="creditCard" name="creditCard" required>

<label for="phone">Номер телефону:</label>
<input type="tel" id="phone" name="phone" required>

<label for="email">Адреса електронної пошти:</label>
<input type="email" id="email" name="email" required>

<button type="submit">Надіслати</button>
<button type="button" onclick="clearForm()">Очистити</button>

<div id="errorMessages" class="error"></div>
</form>`;

let creditCardAttempts = 3;

function validateForm(event) {
  event.preventDefault();
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var creditCard = document.getElementById('creditCard').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var errorMessages = '';

  const creditCardPattern = /^[0-9]{16}$/; // Зразок номеру кредитної картки - 16 цифр.
  const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/; // Паттерн для імені і прізвища.
  const phonePattern = /^\d{10}$/; // Паттерн для номеру телефону (наприклад, 1234567890).
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Паттерн для адреси електронної пошти.

  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    errorMessages += 'Неправильний формат імені або прізвища.\n';
  }
  if (!phonePattern.test(phone)) {
    errorMessages += 'Неправильний формат номеру телефону. Номер повинен містити 10 цифр.\n';
  }
  if (!emailPattern.test(email)) {
    errorMessages += 'Неправильний формат адреси електронної пошти.\n';
  }
  if (!creditCardPattern.test(creditCard)) {
    errorMessages += 'Неправильний формат номеру кредитної картки. Номер повинен містити рівно 16 цифр.\n';
      creditCardAttempts--;

      if (creditCardAttempts <= 0) {
          document.getElementById('creditCard').disabled = true;
          errorMessages += 'Ви вичерпали ліміт спроб для введення номеру кредитної картки.\n';
      }
  }
  if (errorMessages) {
      document.getElementById('errorMessages').innerText = errorMessages;
      return false;
  }

  alert('Форма вірна! Відправлено на сервер.');
  clearForm();
  return true;
}

function clearForm() {
  document.getElementById("registrationForm").reset();
  document.getElementById("errorMessages").innerText = "";
}


const getContent_4_1 = () => {
  creditCardAttempts = 3;
  return content_4_1;
};

const replace4_2 = (event) => {
  event.preventDefault();
  const inputString = document.querySelector("#regtext").value;
  let regex = /aaa(?!.*aaa)/; 
  let result = inputString.replace(regex, "!");
  const resultHtml = `
  <p>Результат: ${result}</p>`
  setContent(content_4_2 + resultHtml);
};

const content_4_2 = `
<form class="t4-form" onsubmit="replace4_2(event)">
  <label for="regtext">Введіть рядок: </label>
  <input type="text" id="regtext" name="regtext" required>
  <button type="submit">Замінити</button>
</form>`;
