const getContent_6 = () => {
  return `<div id="blackSquare"></div>`;
};

const setupAnimation = () => {
  $(document).ready(function () {
    var square = $("#blackSquare");

    // Відображення у центрі вікна
    var windowHeight = $(window).height();
    var squareHeight = square.height();
    square.css({
      top: (windowHeight - squareHeight) / 2,
      left: "50%",
      transform: "translateX(-50%)",
    });

    // Рух вниз
    square.animate({ top: windowHeight - squareHeight }, 2000, function () {
      // Рух до верхньої межі вікна
      square.animate({ top: 0 }, 2000, function () {
        // Плавне зникнення
        square.animate({ opacity: 0 }, 1000, function () {
          setTimeout(function () {
            // Плавний показ
            square.animate({ opacity: 1 }, 1000, function () {
              // Зміна коліру на зелений
              square.css("background-color", "green");
            });
          }, 1000);
        });
      });
    });
  });
};
