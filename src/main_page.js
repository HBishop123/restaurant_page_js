// function to create page
const mainPage = function mainPage() {
  // Div that all content will be placed under
  const allContent1 = document.getElementById("content1");

  (() => {
    // function to style both the body and *
    const everything = document.querySelectorAll("*");
    const body = document.querySelector("body");

    for (let i = 0; i < everything.length; i++) {
      const allElemenets = everything[i];
      allElemenets.style.boxSizing = "border-box";
      allElemenets.style.margin = "0px";
      allElemenets.style.padding = "0px";
    }
    body.style.height = "100%";
    body.style.width = "100%";
    document.body.appendChild(allContent1);
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
    allContent1.appendChild(header);
  })();

  // function that creates and appends content for the header
  (function headerContent() {
    const header = document.querySelector("header");
    const logo = document.createElement("div");
    logo.className = "logo";
    header.appendChild(logo);

    const logoImage = document.createElement("img");
    logoImage.alt = "Restaurant Logo";
    logoImage.src = `./images/red-kitchen-chef-design-logo-template-chef-restaurant-logo-stock-illustrations-free-vector.png`;
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
    menuP.id = "menu";
    companyP.textContent = "Company";
    companyP.id = "company";
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
    allContent1.appendChild(mainSection);

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
    burgerImage.src = `./images/burger.png`;
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
    mainSectionContainer.appendChild(mainContainerText);

    const bigText = document.createElement("p");
    bigText.innerText = "It's time for us to show you the perfect burger.";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    bigText.style.margin = "0px";
    mainContainerText.appendChild(bigText);

    const smallText = document.createElement("p");
    smallText.innerText =
      "It's official, we've arrived...with hot, fresh, juicy burgers that are served FRESH off the grill, NOT the warming tray...";
    smallText.style.width = "60%";
    smallText.style.fontSize = "16px";
    smallText.style.fontFamily = "'Roboto', sans-serif";
    smallText.style.margin = "0px";
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
    veggieImage.src = `./images/veggie.png`;
    veggieImage.alt = "Veggie Burger";
    veggieImage.style.width = "80px";
    veggieImage.style.height = "80px";
    veggieContainer.appendChild(veggieImage);

    const veggieText = document.createElement("p");
    veggieText.innerText = "Veggie Options";
    veggieText.style.fontSize = "16px";
    veggieText.style.fontFamily = "'Roboto', sans-serif";
    veggieText.style.margin = "0px";
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
    breakfastImage.src = `./images/brekfast.png`;
    breakfastImage.alt = "Breakfast Burger Options";
    breakfastImage.style.width = "80px";
    breakfastImage.style.height = "80px";
    breakfastContainer.appendChild(breakfastImage);

    const breakfastText = document.createElement("p");
    breakfastText.innerText = "Breakfast Combos";
    breakfastText.style.fontSize = "16px";
    breakfastText.style.fontFamily = "'Roboto', sans-serif";
    breakfastText.style.margin = "0px";
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
    saladImage.src = `./images/salad.png`;
    saladImage.alt = "Salad Options";
    saladImage.style.width = "80px";
    saladImage.style.height = "80px";
    saladContainer.appendChild(saladImage);

    const saladText = document.createElement("p");
    saladText.innerText = "Fresh-Made Salads";
    saladText.style.fontSize = "16px";
    saladText.style.fontFamily = "'Roboto', sans-serif";
    saladText.style.margin = "0px";
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
    sandwichImage.src = `./images/sandwich.png`;
    sandwichImage.alt = "Sandwich Options";
    sandwichImage.style.width = "80px";
    sandwichImage.style.height = "80px";
    sandwichContainer.appendChild(sandwichImage);

    const sandwichText = document.createElement("p");
    sandwichText.innerText = "Sandwiches";
    sandwichText.style.fontSize = "16px";
    sandwichText.style.fontFamily = "'Roboto', sans-serif";
    sandwichText.style.margin = "0px";
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
    sidesImage.src = `./images/fries.png`;
    sidesImage.alt = "Side Options";
    sidesImage.style.width = "80px";
    sidesImage.style.height = "80px";
    sidesContainer.appendChild(sidesImage);

    const sidesText = document.createElement("p");
    sidesText.innerText = "Fries & Sides";
    sidesText.style.fontSize = "16px";
    sidesText.style.fontFamily = "'Roboto', sans-serif";
    sidesText.style.margin = "0px";
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
    beverageImage.src = `./images/drink.png`;
    beverageImage.alt = "Drink Options";
    beverageImage.style.width = "100px";
    beverageImage.style.height = "80px";
    beverageContainer.appendChild(beverageImage);

    const beverageText = document.createElement("p");
    beverageText.innerText = "Beverages";
    beverageText.style.fontSize = "16px";
    beverageText.style.fontFamily = "'Roboto', sans-serif";
    beverageText.style.margin = "0px";
    beverageContainer.appendChild(beverageText);
    // creating Beverage Option end
  })();

  (function createAndStyleLayerOne() {
    const mainSectionContainer = document.querySelector(".main-container");
    // creating the text box area for the text and header text
    const textOneContainer = document.createElement("div");
    textOneContainer.style.height = "100%";
    textOneContainer.style.width = "100%";
    textOneContainer.style.gridColumn = "1/2";
    textOneContainer.style.gridRow = "3/4";
    textOneContainer.style.backgroundColor = "white";
    textOneContainer.style.display = "flex";
    textOneContainer.style.justifyContent = "center";
    textOneContainer.style.flexDirection = "column";
    textOneContainer.style.gap = "10px";
    textOneContainer.style.paddingLeft = "13%";
    mainSectionContainer.appendChild(textOneContainer);

    const bigText = document.createElement("p");
    bigText.innerText = "Proper Spicy Nuggs! All Fillet. No Filler";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    bigText.style.margin = "0px";
    textOneContainer.appendChild(bigText);

    const smallText = document.createElement("p");
    smallText.innerText =
      "Our Spicy Chicken Nuggets are the standard bu which all other spicy nuggets are judged against. Many have tried and failed, but there's nothing like our verified, original Spicy Chicken Nuggets. They're legit!";
    smallText.style.width = "60%";
    smallText.style.fontSize = "16px";
    smallText.style.fontFamily = "'Roboto', sans-serif";
    smallText.style.margin = "0px";
    textOneContainer.appendChild(smallText);
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
    imageOne.src = `./images/chicken.png`;
    imageOne.alt = "Spicy Chicken Nuggets";
    imageOne.style.width = "100%";
    imageOne.style.height = "450px";
    imageOneContainer.appendChild(imageOne);
    // creating the adjacent area for the image END
  })();

  (function createAndStyleLayerTwo() {
    const mainSectionContainer = document.querySelector(".main-container");
    // creating the area for the image
    const imageTwoContainer = document.createElement("div");
    imageTwoContainer.style.height = "100%";
    imageTwoContainer.style.width = "100%";
    imageTwoContainer.style.backgroundColor = "white";
    mainSectionContainer.appendChild(imageTwoContainer);

    const imageTwo = document.createElement("img");
    imageTwo.src = `./images/red-restaurant.png`;
    imageTwo.alt = "Image of our red restaurant";
    imageTwo.style.width = "100%";
    imageTwo.style.height = "450px";
    imageTwoContainer.appendChild(imageTwo);
    // creating the area for the image end

    // creating the text box area for the text and header text
    const textTwoContainer = document.createElement("div");
    textTwoContainer.style.height = "100%";
    textTwoContainer.style.width = "100%";
    textTwoContainer.style.backgroundColor = "white";
    textTwoContainer.style.display = "flex";
    textTwoContainer.style.justifyContent = "center";
    textTwoContainer.style.flexDirection = "column";
    textTwoContainer.style.gap = "10px";
    mainSectionContainer.appendChild(textTwoContainer);

    const bigText = document.createElement("p");
    bigText.innerText = "We're bringing the heat to the streets.";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    bigText.style.paddingLeft = "13%";
    bigText.style.margin = "0px";
    textTwoContainer.appendChild(bigText);

    const smallText = document.createElement("p");
    smallText.innerText =
      "Fancy a burger that's freshly made, not pre-made? That was rehtorical... of course you do! We're now open! Find us all across the globe!";
    smallText.style.width = "60%";
    smallText.style.fontSize = "16px";
    smallText.style.fontFamily = "'Roboto', sans-serif";
    smallText.style.paddingLeft = "13%";
    smallText.style.margin = "0px";
    textTwoContainer.appendChild(smallText);
    // creating the text box area for the text and header text END
  })();

  (function createAndStyleLayerThree() {
    const mainSectionContainer = document.querySelector(".main-container");
    // creating the text box area for the text and header text
    const textThreeContainer = document.createElement("div");
    textThreeContainer.style.height = "100%";
    textThreeContainer.style.width = "100%";
    textThreeContainer.style.backgroundColor = "white";
    textThreeContainer.style.display = "flex";
    textThreeContainer.style.justifyContent = "center";
    textThreeContainer.style.flexDirection = "column";
    textThreeContainer.style.paddingLeft = "13%";
    textThreeContainer.style.gap = "30px";
    mainSectionContainer.appendChild(textThreeContainer);

    const bigText = document.createElement("p");
    bigText.innerText = "Real Food. Real Careers.";
    bigText.style.color = "red";
    bigText.style.fontWeight = "bold";
    bigText.style.fontSize = "50px";
    bigText.style.width = "70%";
    bigText.style.fontFamily = "'Asap', sans-serif";
    bigText.style.margin = "0px";
    textThreeContainer.appendChild(bigText);

    const smallTextOne = document.createElement("p");
    smallTextOne.innerText = "Come and work for us!";
    smallTextOne.style.width = "60%";
    smallTextOne.style.fontSize = "16px";
    smallTextOne.style.fontFamily = "'Roboto', sans-serif";
    smallTextOne.style.margin = "0px";
    textThreeContainer.appendChild(smallTextOne);

    const smallTextTwo = document.createElement("p");
    smallTextTwo.innerText =
      "For 50 years we've been serving up our world class burgers and have remained devoted to treating our employees fair and square. We offer flexibility. Fun. The feeling that you can just be you.";
    smallTextTwo.style.width = "60%";
    smallTextTwo.style.fontSize = "16px";
    smallTextTwo.style.fontFamily = "'Roboto', sans-serif";
    smallTextTwo.style.margin = "0px";
    textThreeContainer.appendChild(smallTextTwo);

    const smallTextThree = document.createElement("p");
    smallTextThree.innerText =
      "No zero-contract. No nonsense. Jobs and careers done right.";
    smallTextThree.style.width = "60%";
    smallTextThree.style.fontSize = "16px";
    smallTextThree.style.fontFamily = "'Roboto', sans-serif";
    smallTextThree.style.margin = "0px";
    textThreeContainer.appendChild(smallTextThree);

    const smallTextFour = document.createElement("p");
    smallTextFour.innerHTML =
      "Discover how we can help you grow your career here.";

    smallTextFour.style.width = "60%";
    smallTextFour.style.fontSize = "16px";
    smallTextFour.style.fontFamily = "'Roboto', sans-serif";
    smallTextFour.style.margin = "0px";
    textThreeContainer.appendChild(smallTextFour);
    // creating the text box area for the text and header text end

    // creating the area for the image
    const imageThreeContainer = document.createElement("div");
    imageThreeContainer.style.height = "100%";
    imageThreeContainer.style.width = "100%";
    imageThreeContainer.style.backgroundColor = "white";
    mainSectionContainer.appendChild(imageThreeContainer);

    const imageThree = document.createElement("img");
    imageThree.src = `./images/happy-staff.png`;
    imageThree.alt = "picture of happy staff";
    imageThree.style.width = "100%";
    imageThree.style.height = "450px";
    imageThreeContainer.appendChild(imageThree);
    // creating the area for the image end
  })();

  (function createAndStyleFooter() {
    // creating & styling footer
    const footer = document.createElement("footer");
    footer.style.height = "50px";
    footer.style.backgroundColor = "#b0171f";
    footer.style.margin = "0px";
    footer.style.padding = "0px";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    allContent1.appendChild(footer);

    // creating & styling contact 'p'
    const contact = document.createElement("p");
    contact.innerText = "Contact Us";
    contact.style.fontFamily = "Roboto, sans-serif";
    contact.style.paddingLeft = "5px";
    contact.style.margin = "0px";
    contact.style.alignSelf = "center";
    contact.style.margin = "2.5px 0px 2.5px 0px";
    contact.style.fontWeight = "bold";
    contact.style.fontSize = "1.1rem";

    footer.appendChild(contact);

    // creating and styling ul of footer links
    const list = document.createElement("ul");
    list.style.display = "flex";
    list.style.flexDirection = "row";
    list.style.gap = "50px";
    list.style.listStyle = "none";
    list.style.justifyContent = "center";
    list.style.alignItems = "center";
    list.style.paddingLeft = "5px";
    list.style.margin = "0px";
    footer.appendChild(list);

    const cookies = document.createElement("li");
    cookies.innerText = "Cookies and Tracking";
    cookies.style.fontFamily = "'Roboto', sans-serif";
    cookies.style.fontWeight = "bold";
    list.appendChild(cookies);

    const privacyPolicy = document.createElement("li");
    privacyPolicy.innerText = "Privacy Policy";
    privacyPolicy.style.fontFamily = "'Roboto', sans-serif";
    privacyPolicy.style.fontWeight = "bold";
    list.appendChild(privacyPolicy);

    const managePrivacy = document.createElement("li");
    managePrivacy.innerText = "Manage Privacy Preferences";
    managePrivacy.style.fontFamily = "'Roboto', sans-serif";
    managePrivacy.style.fontWeight = "bold";
    list.appendChild(managePrivacy);

    const tax = document.createElement("li");
    tax.innerText = "Tax Strategy";
    tax.style.fontFamily = "'Roboto', sans-serif";
    tax.style.fontWeight = "bold";
    list.appendChild(tax);
  })();
};

export default mainPage;
