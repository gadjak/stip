const MainLayout = (ButtonsComponent) => `
      <div style="display: flex; flex-direction: column; gap: 5px;">
          ${ButtonsComponent()}
      </div>
      <div class="content"></div>
      `;

const LabButtons = (labNum) => {
  switch (labNum) {
    case "1":
      return FirstLabButtons;
    case "2":
      return SecondLabButtons;
    case "3":
      return ThirdLabButtons;
    case "4":
      return LabButtons4;
    case "5":
      return LabButtons5;
    case "6":
      return LabButtons6;
    case "7":
      return LabButtons7;
    case "8":
      return LabButtons8;
    case "9":
      return LabButtons9;
    case "0":
      return LabButtons10;
    default:
      break;
  }
};


const onClickMenuItem = (event) => {
  const target = event.target;
  const labNum = target.innerHTML.slice(-1);
  const LabButtonsComponent = LabButtons(labNum);
  const jsx = MainLayout(LabButtonsComponent);
  render(jsx);
};

const addMenuEventListeners = () => {
  const menuItems = document.querySelectorAll(".menu li");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", onClickMenuItem);
  });
};
addMenuEventListeners();
