//need to append to 'output' on home: div img

const root = document.querySelector("#root");

function create(element) {
  return document.createElement(element);
}

function ButtonMaker(textContent) {
  const buttonContainer = create("div");
  const stepParent = create("div");
  const spanOne = create("span");
  const spanTwo = create("span");
  const spanThree = create("span");
  const spanFour = create("span");
  const button = create("div");
  const text = create("div");

  buttonContainer.classList.add("button-container");
  stepParent.classList.add("span-parent");
  button.classList.add("button-filter");

  text.textContent = textContent;

  root.prepend(buttonContainer);
  buttonContainer.appendChild(stepParent);
  stepParent.appendChild(spanOne);
  stepParent.appendChild(spanTwo);
  stepParent.appendChild(spanThree);
  stepParent.appendChild(spanFour);
  stepParent.appendChild(button);
  button.appendChild(text);
}

ButtonMaker("Test Button");
