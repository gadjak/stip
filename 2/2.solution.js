const content_2_1 = `
<ul class="st-menu">
    <li>
        <p>Products</p>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
    </li>
    <li>
        <p>Services</p>
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
        </ul>
    </li>
</ul>`;

const toggleSubMenuVisible = (e) => {
  const subMenu = e.target.nextElementSibling;
  if (subMenu.style.display) {
    subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";
  } else {
    subMenu.style.display = "block";
  }
};

const addMenuListeners_2_1 = () => {
  const menuItems = document.querySelectorAll(".st-menu li p");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleSubMenuVisible);
  });
};

const getContent_2_1 = () => {
  return content_2_1;
};

const moveImageToLeft_2_2 = () => {
  const movingImage = document.querySelector(".st-image");
  setTimeout(() => {
    movingImage.style.left = "800px";
  }, 100);
};

const content_2_2 = `
<img class="st-image" src="public/Screenshot_4.png">`;
