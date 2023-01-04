const mainPage = function mainPage() {
  const allContent = document.getElementById("content");

  (() => {
    const everything = document.querySelector("*");
    const body = document.querySelector("body");

    everything.style.boxSizing = "border-box";
    everything.style.margin = "0";
    everything.style.padding = "0";

    body.style.height = "100%";
    body.style.width = "100%";

    document.body.appendChild(allContent);
  })();

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

  (function createFoodList() {
    const mainSectionContainer = document.querySelector(".main-container");
  })();
};
