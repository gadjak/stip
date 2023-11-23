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
    "9": "дев'ять",
    "10": "десять",
    "11": "одинадцять",
    "12": "дванадцять",
    "13": "тринадцять",
    "14": "чотирнадцять",
    "15": "п'ятнадцять",
    "16": "шістнадцять",
    "17": "сімнадцять",
    "18": "вісімнадцять",
    "19": "дев'ятнадцять",
    "20": "двадцять",
    "30": "тридцять",
    "40": "сорок",
    "50": "п'ятдесят",
    "60": "шістдесят",
    "70": "сімдесят",
    "80": "вісімдесят",
    "90": "дев'яносто",
    "100": "сто",
    "200": "двісті",
    "300": "триста",
    "400": "чотириста",
    "500": "п'ятсот",
    "600": "шістсот",
    "700": "сімсот",
    "800": "вісімсот",
    "900": "дев'ятсот",
  };

  var textNodes = document.evaluate('//text()', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

  for (var i = 0; i < textNodes.snapshotLength; i++) {
    var textNode = textNodes.snapshotItem(i);
    var words = textNode.nodeValue.split(/\b(\d+)\b/);

    for (var j = 0; j < words.length; j++) {
      var word = words[j];
      if (/^\d+$/.test(word)) {
        // Якщо слово є цілим числом, замінити його словесним еквівалентом
        var number = parseInt(word, 10);
        if (number in numericalValues) {
          words[j] = numericalValues[number.toString()];
        }else if(word.length == 2){
          console.log()
          words[j] = numericalValues[word[0] + '0'] + ' ' + numericalValues[word[1]];
        }else if(word.length == 3){
          if(word[0] !== '0'){
            words[j] = numericalValues[word[0] + '00'] + ' ' + numericalValues[word[1] + '0'] + ' ' + numericalValues[word[2]];
          }else{
            words[j] = 'нуль ' + numericalValues[word[1] + '0'] + ' ' + numericalValues[word[2]];
          }
        }
      }
    }

    textNode.nodeValue = words.join('');
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