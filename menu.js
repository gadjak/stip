
const renderLab = (renderButtons) => {
    rootNode.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 5px;">
          ${renderButtons()}
      </div>
      <div class="content"></div>
      `;
  };
  
const onClickMenuItem = (event) => {
    const target = event.target;
    const labNum = target.innerHTML.slice(-1);
    switch (labNum) {
      case "1":
        renderLab(FirstLabButtons);
        break;
      default:
        break;
    }
  };
  
  const addMenuEventListeners = () => {
    const menuItems = document.querySelectorAll(".menu li");
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", onClickMenuItem);
    });
  };
  addMenuEventListeners();