const getContent_9 = () => {
  return `  <label for="transformSelect">Виберіть тип трансформації:</label>
  <select id="transformSelect">
    <option value="sort">Сортування за прізвищем</option>
    <option value="filter">Фільтрація за посадою</option>
  </select>

  <!-- Кнопка для виклику трансформації -->
  <button onclick="transformXML()">Виконати трансформацію</button>

  <!-- Вивід результату трансформації -->
  <div id="output"></div>`;
};

function transformXML() {
  var selection = document.getElementById("transformSelect").value;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "7/employees.xml", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xml = xhr.responseXML;

      var xsltProcessor = new XSLTProcessor();

      // Load the appropriate XSL file based on the selection
      var xslFile;
      if (selection === "sort") {
        xslFile = "9/sort.xsl";
      } else if (selection === "filter") {
        xslFile = "9/filter.xsl";
      }

      // Load the XSL file asynchronously
      var xslHttpRequest = new XMLHttpRequest();
      xslHttpRequest.open("GET", xslFile, true);
      xslHttpRequest.onreadystatechange = function () {
        if (xslHttpRequest.readyState === 4 && xslHttpRequest.status === 200) {
          var xsl = xslHttpRequest.responseXML;
          xsltProcessor.importStylesheet(xsl);

          var resultDocument = xsltProcessor.transformToDocument(xml);
          var resultString = new XMLSerializer().serializeToString(resultDocument);
          document.getElementById("output").innerHTML = resultString;
        }
      };
      xslHttpRequest.send();
    }
  };

  xhr.send();
}