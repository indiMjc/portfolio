axios
    .get("https://api.nasa.gov/planetary/apod?api_key=LHhD6UH1gC3c1EJyebHbf3UBgaoOZBbH3loKthxz")
    .then(response => {
        console.log(response.data.url);
        const homePage = document.querySelector("#home");
        homePage.setAttribute("style", `background: url('${response.data.url}'); background-repeat: no-repeat; background-size: cover;`);
    })
    .catch(error => {
        console.log("Data not returned", error);
    });

function create(element) {
  return document.createElement(element);
};

const root = document.querySelector("#root");

function ButtonMaker(textContent, linkLocation) {
  
  const buttonLink = create("a");
  const buttonContainer = create("div");
  const stepParent = create("div");
  const spanOne = create("span");
  const spanTwo = create("span");
  const spanThree = create("span");
  const spanFour = create("span");
  const button = create("div");
  const text = create("div");

  buttonLink.classList.add("button-link");
  buttonContainer.classList.add("button-container");
  stepParent.classList.add("span-parent");
  button.classList.add("button-filter");
  text.classList.add("button-text");

  buttonLink.href = linkLocation;
  text.textContent = textContent;

  // root.prepend(buttonLink);
  buttonLink.appendChild(buttonContainer);
  buttonContainer.appendChild(stepParent);
  stepParent.appendChild(spanOne);
  stepParent.appendChild(spanTwo);
  stepParent.appendChild(spanThree);
  stepParent.appendChild(spanFour);
  stepParent.appendChild(button);
  button.appendChild(text);
  
  return buttonLink;
};

function SmallerButton(textContent, linkLocation, x, y) {

  const newButton = ButtonMaker(textContent, linkLocation);
  newButton.setAttribute("style", `transform: scale(${x}, ${y})`);
  newButton.classList.add("small-button");

  return newButton;
}

// root.appendChild(ButtonMaker("PORTFOLIO", "http://www.facebook.com"));
root.appendChild(ButtonMaker("Portfolio", "./projects/projects.html"));
// root.prepend(SmallerButton("test", "http://www.facebook.com", 0.5, 0.5));