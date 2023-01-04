// function to create page
const mainPage = function mainPage() {
  // Div that all content will be placed under
  const allContent = document.getElementById("content");

  (() => {
    // function to style both the body and *
    const everything = document.querySelector("*");
    const body = document.querySelector("body");

    everything.style.boxSizing = "border-box";
    everything.style.margin = "0";
    everything.style.padding = "0";

    body.style.height = "100%";
    body.style.width = "100%";

    document.body.appendChild(allContent);
  })();

  // function that creates the pages header
  (function createHeader() {
    const header = document.createElement("header");
    header.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.alignItems = "center";
    header.style.backgroundColor = "white";
    header.style.position = "sticky";
    header.style.top = "0";
    allContent.appendChild(header);
  })();

  // function that creates and appends content for the header
  (function headerContent() {
    const header = document.querySelector("header");
    const logo = document.createElement("div");
    logo.className = "logo";
    header.appendChild(logo);

    const logoImage = document.createElement("img");
    logoImage.alt = "Restaurant Logo";
    logoImage.src =
      "/images/red-kitchen-chef-design-logo-template-chef-restaurant-logo-stock-illustrations-free-vector.webp";
    logoImage.style.height = "100px";
    logoImage.style.width = "auto";
    header.appendChild(logoImage);

    const navigation = document.createElement("nav");
    navigation.style.display = "flex";
    navigation.style.flexDirection = "row";
    navigation.style.justifyContent = "center";
    navigation.style.alignItems = "center";
    navigation.style.width = "100%";
    navigation.style.height = "30px";
    navigation.style.gap = "50px";
    navigation.style.backgroundColor = "#b0171f";
    navigation.style.color = "white";
    navigation.style.fontWeight = "bold";
    navigation.style.fontFamily = "'Roboto,' sans-serif";
    header.appendChild(navigation);

    const menuP = document.createElement("p");
    const companyP = document.createElement("p");
    const jobsP = document.createElement("p");
    menuP.textContent = "Menu";
    companyP.textContent = "Company";
    jobsP.textContent = "Jobs";

    navigation.appendChild(menuP);
    navigation.appendChild(companyP);
    navigation.appendChild(jobsP);
  })();

  // function that both creates and appends content to the 'main' section of the page
  (function createMainSection() {
    const mainSection = document.createElement("main");
    mainSection.style.width = "100%";
    mainSection.style.height = "100%";
    mainSection.style.backgroundColor = "rgb(240, 240, 240)";
    allContent.appendChild(mainSection);

    const mainSectionContainer = document.createElement("div");
    mainSectionContainer.className = "main-container";
    mainSectionContainer.style.maxWidth = "1500px";
    mainSectionContainer.style.margin = "auto";
    mainSectionContainer.style.display = "grid";
    mainSectionContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    mainSectionContainer.style.gridTemplateRows =
      "300px 100px 450px 450px 450px";
    mainSection.appendChild(mainSectionContainer);

    const mainContainerImage = document.createElement("div");
    mainContainerImage.style.display = "flex";
    mainContainerImage.style.justifyContent = "center";
    mainContainerImage.style.width = "100%";
    mainContainerImage.style.backgroundColor = "white";
    mainSectionContainer.appendChild(mainContainerImage);

    const burgerImage = document.createElement("img");
    burgerImage.src = "/images/burger.png";
    burgerImage.alt = "A Beautiful Burger";
    burgerImage.style.height = "300px";
    burgerImage.style.width = "auto";
    burgerImage.style.paddingTop = "10px";
    burgerImage.style.justifySelf = "center";
    mainContainerImage.appendChild(burgerImage);

    const mainContainerText = document.createElement("div");
    mainContainerText.style.display = "flex";
    mainContainerText.style.justifyContent = "center";
    mainContainerText.style.flexDirection = "column";
    mainContainerText.style.width = "100%";
    mainContainerText.style.backgroundColor = "white";
    mainContainerText.style.gap = "10px";
    mainContainerText.style.paddingLeft = "13%";
    mainSectionContainer.appendChild(mainContainerText);

    const bigText = document.createElement("p");
    bigText.innerText = "It's time for us to show you the perfect burger.";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    mainContainerText.appendChild(bigText);

    const smallText = document.createElement("p");
    smallText.innerText =
      "It's official, we've arrived...with hot, fresh, juicy burgers that are served FRESH off the grill, NOT the warming tray...";
    smallText.style.width = "60%";
    smallText.style.fontSize = "16px";
    smallText.style.fontFamily = "'Roboto', sans-serif";
    mainContainerText.appendChild(smallText);
  })();

  // function that creates a list of different food options across the page
  (function createFoodList() {
    const mainSectionContainer = document.querySelector(".main-container");
    const foodListContainer = document.createElement("div");
    foodListContainer.style.gridColumn = "1/3";
    foodListContainer.style.display = "flex";
    foodListContainer.style.flexDirection = "row";
    foodListContainer.style.gap = "20px";
    foodListContainer.style.alignItems = "center";
    foodListContainer.style.justifyContent = "space-around";
    mainSectionContainer.appendChild(foodListContainer);

    // creating Veggie Option start
    const veggieContainer = document.createElement("div");
    veggieContainer.style.display = "flex";
    veggieContainer.style.flexDirection = "column";
    veggieContainer.style.alignItems = "center";
    veggieContainer.style.justifyContent = "center";
    foodListContainer.appendChild(veggieContainer);

    const veggieImage = document.createElement("img");
    veggieImage.src = "/images/veggie.png";
    veggieImage.alt = "Veggie Burger";
    veggieImage.style.width = "80px";
    veggieImage.style.height = "80px";
    veggieContainer.appendChild(veggieImage);

    const veggieText = document.createElement("p");
    veggieText.innerText = "Veggie Options";
    veggieText.style.fontSize = "16px";
    veggieText.style.fontFamily = "'Roboto', sans-serif";
    veggieContainer.appendChild(veggieText);
    // creating Veggie Option end

    // creating Breakfast Option start
    const breakfastContainer = document.createElement("div");
    breakfastContainer.style.display = "flex";
    breakfastContainer.style.flexDirection = "column";
    breakfastContainer.style.alignItems = "center";
    breakfastContainer.style.justifyContent = "center";
    foodListContainer.appendChild(breakfastContainer);

    const breakfastImage = document.createElement("img");
    breakfastImage.src = "/images/brekfast.png";
    breakfastImage.alt = "Breakfast Burger Options";
    breakfastImage.style.width = "80px";
    breakfastImage.style.width = "80px";
    breakfastContainer.appendChild(breakfastImage);

    const breakfastText = document.createElement("p");
    breakfastText.innerText = "Breakfast Combos";
    breakfastText.style.fontSize = "16px";
    breakfastText.style.fontFamily = "'Roboto', sans-serif";
    breakfastContainer.appendChild(breakfastText);
    // creating Breakfast Option end

    // creating Salad Option start
    const saladContainer = document.createElement("div");
    saladContainer.style.display = "flex";
    saladContainer.style.flexDirection = "column";
    saladContainer.style.alignItems = "center";
    saladContainer.style.justifyContent = "center";
    foodListContainer.appendChild(saladContainer);

    const saladImage = document.createElement("img");
    saladImage.src = "/images/salad.png";
    saladImage.alt = "Salad Options";
    saladImage.style.width = "80px";
    saladImage.style.height = "80px";
    saladContainer.appendChild(saladImage);

    const saladText = document.createElement("p");
    saladText.innerText = "Fresh-Made Salads";
    saladText.style.fontSize = "16px";
    saladText.style.fontFamily = "'Roboto', sans-serif";
    saladContainer.appendChild(saladText);
    // creating Salad Option end

    // creating Sandwich Option start
    const sandwichContainer = document.createElement("div");
    sandwichContainer.style.display = "flex";
    sandwichContainer.style.flexDirection = "column";
    sandwichContainer.style.alignItems = "center";
    sandwichContainer.style.justifyContent = "center";
    foodListContainer.appendChild(sandwichContainer);

    const sandwichImage = document.createElement("img");
    sandwichImage.src = "/images/sandwich.png";
    sandwichImage.alt = "Sandwich Options";
    sandwichImage.style.width = "80px";
    sandwichImage.style.height = "80px";
    sandwichContainer.appendChild(sandwichImage);

    const sandwichText = document.createElement("p");
    sandwichText.innerText = "Sandwiches";
    sandwichText.style.fontSize = "16px";
    sandwichText.style.fontFamily = "'Roboto', sans-serif";
    sandwichContainer.appendChild(sandwichText);
    // creating Sandwich Option end

    // creating Fries & Sides Option start
    const sidesContainer = document.createElement("div");
    sidesContainer.style.display = "flex";
    sidesContainer.style.flexDirection = "column";
    sidesContainer.style.alignItems = "center";
    sidesContainer.style.justifyContent = "center";
    foodListContainer.appendChild(sidesContainer);

    const sidesImage = document.createElement("img");
    sidesImage.src = "/images/fries.png";
    sidesImage.alt = "Side Options";
    sidesImage.style.width = "80px";
    sidesImage.style.height = "80px";
    sidesContainer.appendChild(sidesImage);

    const sidesText = document.createElement("p");
    sidesText.innerText = "Fries & Sides";
    sidesText.style.fontSize = "16px";
    sidesText.style.fontFamily = "'Roboto', sans-serif";
    sidesContainer.appendChild(sidesText);
    // creating Fries & Sides Option end

    // creating Beverage Option Start
    const beverageContainer = document.createElement("div");
    beverageContainer.style.display = "flex";
    beverageContainer.style.flexDirection = "column";
    beverageContainer.style.alignItems = "center";
    beverageContainer.style.justifyContent = "center";
    foodListContainer.appendChild(beverageContainer);

    const beverageImage = document.createElement("img");
    beverageImage.src = "/images/drink.png";
    beverageImage.alt = "Drink Options";
    beverageImage.style.width = "100px";
    beverageImage.style.height = "80px";
    beverageContainer.appendChild(beverageImage);

    const beverageText = document.createElement("p");
    beverageText.innerText = "Beverages";
    beverageText.style.fontSize = "16px";
    beverageText.style.fontFamily = "'Roboto', sans-serif";
    beverageContainer.appendChild(beverageText);
    // creating Beverage Option end
  })();

  (function createAndStyleLayerOne() {
    const mainSectionContainer = document.querySelector(".main-container");
    // creating the text box area for the text and header text
    const textOne = document.createElement("div");
    textOne.style.height = "100%";
    textOne.style.width = "100%";
    textOne.style.gridColumn = "1/2";
    textOne.style.gridRow = "3/4";
    textOne.style.backgroundColor = "white";
    textOne.style.display = "flex";
    textOne.style.justifyContent = "center";
    textOne.style.flexDirection = "column";
    textOne.style.gap = "10px";
    textOne.style.paddingLeft = "13%";
    mainSectionContainer.appendChild(textOne);

    const bigText = document.createElement("p");
    bigText.innerText = "We're bringing the heat to the streets.";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    textOne.appendChild(bigText);

    const smallText = document.createElement("p");
    smallText.innerText =
      "Fancy a burger that's freshly made, not pre-made? That was rehtorical... of course you do! We're now open! Find us all across the globe!";
    smallText.style.width = "60%";
    smallText.style.fontSize = "16px";
    smallText.style.fontFamily = "'Roboto', sans-serif";
    textOne.appendChild(smallText);
    // creating the text box area for the text and header text END

    // creating the adjacent area for the image
    const imageOneContainer = document.createElement("div");
    imageOneContainer.style.height = "100%";
    imageOneContainer.style.width = "100%";
    imageOneContainer.style.gridColumn = "2/3";
    imageOneContainer.style.gridRow = "3/4";
    imageOneContainer.style.backgroundColor = "white";
    mainSectionContainer.appendChild(imageOneContainer);

    const imageOne = document.createElement("img");
    imageOne.src = "/images/chicken.png";
    imageOne.alt = "Spicy Chicken Nuggets";
    imageOne.style.width = "100%";
    imageOne.style.height = "450px";
    imageOneContainer.appendChild(imageOne);
    // creating the adjacent area for the image END
  })();
};
mainPage();
