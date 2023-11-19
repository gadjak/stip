const rootNode = document.querySelector("#root");

const createContentContainer = (html) =>
  `<div class="contentContainer">${html}</div>`;
const setContent = (content, type = "inner") => {
  if (type === "inner") {
    document.querySelector(".content").innerHTML =
      createContentContainer(content);
  } else if (type === "text") {
    const preElement = document.createElement("pre");
    preElement.classList.add("contentContainer");
    preElement.textContent = content;
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".content").appendChild(preElement);
  } else if (type === "without-border") {
    document.querySelector(".content").innerHTML = content;
  }
};

const createSubButton = (title, callback) => {
  return `
    <button class="sub-button" onclick="${callback.name}()">
        ${title}
    </button>
    `;
};
