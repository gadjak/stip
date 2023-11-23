const getContent_7 = () => {
  return `
    <button id="loadXmlButton">Завантажити XML</button>
    <div id="xmlContainer"></div>`;
};

function displayXml_7() {
  $("#loadXmlButton").on("click", function () {
    $.ajax({
      type: "GET",
      url: "7/employees.xml",
      dataType: "xml",
      success: function (xml) {
        var xmlString = new XMLSerializer().serializeToString(xml);
        $("#xmlContainer").html( xmlString );
      },
      error: function () {
        alert("Помилка завантаження XML-файлу.");
      },
    });
  });
}
