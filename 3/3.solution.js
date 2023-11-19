const onNext_3 = () => {
  let nextIndex;
  const currentImage = Number(document.querySelector(".t-label").innerHTML[0]);
  if (currentImage === 3) {
    nextIndex = 1;
  } else {
    nextIndex = currentImage + 1;
  }
  const content = getContent_3(
    `public/${nextIndex}.jpg`,
    `${nextIndex} картинка`
  );
  setContent(content);
};

const onPrev_3 = () => {
  let nextIndex;
  const currentImage = Number(document.querySelector(".t-label").innerHTML[0]);
  if (currentImage === 1) {
    nextIndex = 3;
  } else {
    nextIndex = currentImage - 1;
  }
  const content = getContent_3(
    `public/${nextIndex}.jpg`,
    `${nextIndex} картинка`
  );
  setContent(content);
};

const getContent_3 = (src, label) => {
  return `
  <div class="tt">
      <img width="300" height="300" src="${src}" alt="">
      <div class="controls-3">
     ${createSubButton("Назад", onPrev_3)} 
     <p class="t-label">${label}</p>
     ${createSubButton("Далі", onNext_3)}
     </div>
  </div>`;
};
