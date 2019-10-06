axios
    .get("https://api.nasa.gov/planetary/apod?api_key=LHhD6UH1gC3c1EJyebHbf3UBgaoOZBbH3loKthxz")
    .then(response => {
        console.log(response.data.url);
        setBackground(response.data.url);
    })
    .catch(error => {
        console.log("Data not returned", error);
    });

const root = document.querySelector("#root");

function setBackground(image) {
    document.body.style.background = `url('${image}'`;
};

function create(element) {
  return document.createElement(element);
};

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

  root.prepend(buttonLink);
  buttonLink.appendChild(buttonContainer);
  buttonContainer.appendChild(stepParent);
  stepParent.appendChild(spanOne);
  stepParent.appendChild(spanTwo);
  stepParent.appendChild(spanThree);
  stepParent.appendChild(spanFour);
  stepParent.appendChild(button);
  button.appendChild(text);
};

ButtonMaker("ENTER", "http://www.facebook.com");
