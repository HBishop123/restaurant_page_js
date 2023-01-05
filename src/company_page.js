// function to create page
const companyPage = (function companyPage() {
  // Div that all content will be placed under
  const allContent = document.getElementById("content");

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
    mainSectionContainer.style.gridTemplateRows = "750px 300px 400px";
    mainSection.appendChild(mainSectionContainer);

    const mainImageContainer = document.createElement("div");
    mainImageContainer.style.gridRows = "1/2";
    mainSectionContainer.appendChild(mainImageContainer);

    const burgerBackground = document.createElement("img");
    burgerBackground.src = `./images/food-background.jpg`;
    burgerBackground.alt = "Background display of meal";
    burgerBackground.style.width = "1500px";
    burgerBackground.style.height = "auto";
    burgerBackground.style.clipPath = "inset(40% 0 0 0)";
    burgerBackground.style.transform = "translateY(-40%)";
    burgerBackground.style.zIndex = "0";
    burgerBackground.style.position = "absolute";
    mainImageContainer.appendChild(burgerBackground);

    const bigSentence = document.createElement("h1");
    bigSentence.innerText = "WE'RE A FOOD KIND OF COMPANY";
    bigSentence.style.color = "white";
    bigSentence.style.fontSize = "60px";
    bigSentence.style.paddingLeft = "750px";
    bigSentence.style.width = "1500px";
    bigSentence.style.fontFamily = "'Asap', sans-serif;";
    bigSentence.style.fontWeight = "bold";
    bigSentence.style.position = "absolute";
    bigSentence.style.top = "10";
    mainImageContainer.appendChild(bigSentence);
  })();
  // function to create the second section of the page
  (function secondSection() {
    const mainSectionContainer = document.querySelector(".main-container");
    const whatWeDoContainer = document.createElement("div");
    whatWeDoContainer.style.gridRow = "2/3";
    whatWeDoContainer.style.width = "1500px";
    whatWeDoContainer.style.height = "300px";
    whatWeDoContainer.style.backgroundColor = "#68653a";
    whatWeDoContainer.style.transform = "translateY(-50%)";
    whatWeDoContainer.style.display = "flex";
    whatWeDoContainer.style.justifyContent = "space-between";
    mainSectionContainer.appendChild(whatWeDoContainer);

    const whatWeDo = document.createElement("h2");
    whatWeDo.innerText = "What We Do";
    whatWeDo.style.fontSize = "60px";
    whatWeDo.style.color = "white";
    whatWeDo.style.fontFamily = "'Asap', sans-serif;";
    whatWeDo.style.alignSelf = "center";
    whatWeDo.style.paddingLeft = "200px";
    whatWeDoContainer.appendChild(whatWeDo);

    const whatWeDoDescription = document.createElement("p");
    whatWeDoDescription.innerText =
      "At our Restaurant, we're all about serving up fresh food, even if it means going the extra mile. When you walk through our doors, we do what we can to make everyone feel at home because our family extends through your community.";
    whatWeDoDescription.style.alignSelf = "center";
    whatWeDoDescription.style.width = "750px";
    whatWeDoDescription.style.paddingRight = "200px";
    whatWeDoDescription.style.fontSize = "30px";
    whatWeDoDescription.style.color = "white";
    whatWeDoDescription.style.fontFamily = "'Roboto', sans-serif";
    whatWeDoContainer.appendChild(whatWeDoDescription);
  })();
  // function to create the thid section of my page
  (function thirdSection() {
    const mainSectionContainer = document.querySelector(".main-container");
    const meetTheBoardContainer = document.createElement("div");
    meetTheBoardContainer.style.height = "556px";
    meetTheBoardContainer.style.backgroundColor = "#b0171f";
    meetTheBoardContainer.style.transform = "translateY(-28%)";
    meetTheBoardContainer.style.display = "flex";
    meetTheBoardContainer.style.flexDirection = "row";
    mainSectionContainer.appendChild(meetTheBoardContainer);

    // creating container for my left side text elements
    const leftSide = document.createElement("div");
    leftSide.style.display = "flex";
    leftSide.style.flexDirection = "column";
    leftSide.style.gap = "20px";
    meetTheBoardContainer.appendChild(leftSide);

    // first text element on left side
    const leadershipText = document.createElement("p");
    leadershipText.innerText = "LEADERSHIP & BOARD OF DIRECTORS";
    leadershipText.style.fontSize = "40px";
    leadershipText.style.color = "white";
    leadershipText.style.fontFamily = "'Roboto', sans-serif";
    leadershipText.style.fontWeight = "bold";
    leadershipText.style.paddingTop = "100px";
    leadershipText.style.paddingLeft = "200px";
    leftSide.appendChild(leadershipText);

    // second text element on left side
    const qualitySentence = document.createElement("p");
    qualitySentence.innerText = "We Believe in Quality. Inside and Out.";
    qualitySentence.style.fontSize = "60px";
    qualitySentence.style.color = "white";
    qualitySentence.style.width = "900px";
    qualitySentence.style.paddingLeft = "200px";
    qualitySentence.style.fontFamily = "'Asap', sans-serif;";
    leftSide.appendChild(qualitySentence);

    // third text element on the left side
    const smallerText = document.createElement("p");
    smallerText.innerText =
      "Quality food can't be made without quality leadership. Learn more about the people leading our Company.";
    smallerText.style.fontFamily = "'Roboto', sans-serif";
    smallerText.style.color = "white";
    smallerText.style.width = "600px";
    smallerText.style.paddingLeft = "200px";
    smallerText.style.fontSize = "24px";
    leftSide.appendChild(smallerText);

    // creating div for the right side of the container
    const rightSide = document.createElement("div");
    rightSide.style.display = "flex";
    rightSide.style.alignItems = "center";
    rightSide.style.gap = "50px";
    meetTheBoardContainer.appendChild(rightSide);

    // creating the buttons for the right side
    const buttonOne = document.createElement("button");
    buttonOne.innerText = "OUR LEADERSHIP TEAM";
    buttonOne.className = "buttons";
    const buttonTwo = document.createElement("button");
    buttonTwo.innerText = "MEET THE BOARD";
    buttonTwo.className = "buttons";
    rightSide.appendChild(buttonOne);
    rightSide.appendChild(buttonTwo);

    const buttons = rightSide.querySelectorAll(".buttons");
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons.item(i);
      button.style.width = "200px";
      button.style.height = "75px";
      button.style.borderRadius = "5px";
      button.style.border = "none";
      button.style.backgroundColor = "#029cd4";
      button.style.color = "white";
      button.style.fontFamily = "'Asap', sans-serif;";
    }
  })();

  (function createAndStyleFooter() {
    // creating & styling footer
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.style.height = "50px";
    footer.style.backgroundColor = "black";
    footer.style.margin = "0px";
    footer.style.padding = "0px";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    footer.style.color = "white";
    body.appendChild(footer);

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
})();
