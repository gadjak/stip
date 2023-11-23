function getContent_10_1(num){
  return `<p style="margin-bottom: 10px;"><b>Результат ${num}</b></p>
  <button onclick="openXml_10_${num}()">Завантажити та відкрити XML</button>`;
}


function openXml_10_1(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "7/employees.xml", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlContent = xhr.responseText;
      var newTab = window.open();
      newTab.document.write("<pre>" + xmlContent + "</pre>");
    }
  };
  xhr.send();
}

function openXml_10_2(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "7/employees.xml", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlContent = xhr.responseText;

      var xslHttpRequest = new XMLHttpRequest();
      xslHttpRequest.open("GET", "10/table.xsl", true);
      xslHttpRequest.onreadystatechange = function () {
        if (xslHttpRequest.readyState === 4 && xslHttpRequest.status === 200) {
          var xslContent = xslHttpRequest.responseXML;

          var xsltProcessor = new XSLTProcessor();
          xsltProcessor.importStylesheet(xslContent);

          var resultDocument = xsltProcessor.transformToDocument(new DOMParser().parseFromString(xmlContent, 'text/xml'));

          var newTab = window.open();
          newTab.document.write(new XMLSerializer().serializeToString(resultDocument));
        }
      };
      xslHttpRequest.send();
    }
  };
  xhr.send();
}

function replaceNumericalValues(document) {
  // Словник для заміни цифрових значень
  var numericalValues = {
    "0": "нуль",
    "1": "один",
    "2": "два",
    "3": "три",
    "4": "чотири",
    "5": "п'ять",
    "6": "шість",
    "7": "сім",
    "8": "вісім",
    "9": "дев'ять"
    // Додайте інші значення за потребою
  };

  // Отримання всіх елементів з текстовим вмістом в документі
  var textNodes = document.evaluate('//text()', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

  for (var i = 0; i < textNodes.snapshotLength; i++) {
    var textNode = textNodes.snapshotItem(i);

    // Заміна цифрових значень словесними еквівалентами
    for (var key in numericalValues) {
      var regex = new RegExp('\\b' + key + '\\b', 'g');
      textNode.nodeValue = textNode.nodeValue.replace(regex, numericalValues[key]);
    }
  }
}

function openXml_10_3(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "7/employees.xml", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xmlContent = xhr.responseText;

      // Завантаження XSL-шаблону
      var xslHttpRequest = new XMLHttpRequest();
      xslHttpRequest.open("GET", "10/table.xsl", true);
      xslHttpRequest.onreadystatechange = function () {
        if (xslHttpRequest.readyState === 4 && xslHttpRequest.status === 200) {
          var xslContent = xslHttpRequest.responseXML;

          // Створення об'єкта XSLTProcessor та встановлення XSL-шаблону
          var xsltProcessor = new XSLTProcessor();
          xsltProcessor.importStylesheet(xslContent);

          // Виконання трансформації XML-документа
          var resultDocument = xsltProcessor.transformToDocument(new DOMParser().parseFromString(xmlContent, 'text/xml'));

          // Заміна цифрових значень словесними еквівалентами
          replaceNumericalValues(resultDocument);

          // Відкриття нової вкладки з результатами трансформації та заміни значень
          var newTab = window.open();
          newTab.document.write(new XMLSerializer().serializeToString(resultDocument));
        }
      };
      xslHttpRequest.send();
    }
  };
  xhr.send();
}