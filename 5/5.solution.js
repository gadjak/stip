const content_5_1 = `
<form class="t4-form" id="registrationForm" onsubmit="showModal(event)">
<label for="t5-text">Текст: </label>
<input type="text" id="t5-text" name="t5-text" required>
<button type="submit">Відкрити модальне вікно</button>
</form>
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Модальне вікно</h5>
                <span class="close" onclick="closeModal()">&times;</span>
            </div>
            <div class="modal-body">
                <p id="modalText"></p>
            </div>
            <div class="modal-footer">
                ${createSubButton("Закрити", closeModal)}
            </div>
        </div>
    </div>
</div>
`;

const showModal = (event) => {
  event.preventDefault();
  const textFieldValue = $("#t5-text").val();
  $("#modalText").text("Ваш текст: " + textFieldValue);
  $("#myModal").fadeIn();
};

function closeModal() {
  $("#myModal").fadeOut();
}

const getContent_5_1 = () => {
  return content_5_1;
};

const animateTitle_5_2 = () => {
  $(document).ready(function () {
    var title = $("#animatedTitle");
    var maxWidth = $(window).width() - title.width(); // максимальна ширина

    function animateTitle() {
      title.animate(
        {
          left: (maxWidth / 5) * 2,
          fontSize: "10px",
        },
        1000,
        "linear",
        function () {
          title.animate(
            {
              left: (maxWidth / 5) * 3,
              fontSize: "20px",
            },
            1000,
            "linear",
            function () {
              title.animate(
                {
                  left: (maxWidth / 5) * 4,
                  fontSize: "10px",
                },
                1000,
                "linear",
                function () {
                  title.animate(
                    {
                      left: maxWidth,
                      fontSize: "20px",
                    },
                    1000,
                    "linear",
                    function () {
                      title.hide();
                    }
                  );
                }
              );
            }
          );
        }
      );
    }

    animateTitle();
  });
};

const content_5_2 = `<div id="animatedTitle">Ваш заголовок</div>`;

const setupCheckboxes = () => {
  $(document).ready(function () {
    $("#customIceCreamCheckbox").change(function () {
        var isChecked = $(this).prop("checked");
        $("#plombirRadio, #pistachioRadio").prop("disabled", isChecked);

        if (isChecked) {
            $("input[name='iceCream']").prop("checked", false);
        }
    });
});
}

const content_5_3 = 
`<form>
  <label>
      <input type="radio" name="iceCream" value="plombir" id="plombirRadio">
      Пломбір
  </label>

  <label>
      <input type="radio" name="iceCream" value="pistachio" id="pistachioRadio">
      Фісташкове
  </label>

  <br>

  <label>
      <input type="checkbox" id="customIceCreamCheckbox">
      Кастомне морозиво
  </label>
</form>`;
