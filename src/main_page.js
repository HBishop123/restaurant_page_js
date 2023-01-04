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
};
