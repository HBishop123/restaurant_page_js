import mainPage from "./main_page.js";
import companyPage from "./company_page.js";

let showMainPage = true;
const contentOne = document.querySelector("#content1");
const contentTwo = document.querySelector("#content2");

// function that flicks between pages
function showPages() {
  if (showMainPage) {
    contentOne.style.opactiy = "block";
    contentTwo.style.display = "hidden";
    contentTwo.innerHTML = "";
    mainPage();
  } else {
    contentOne.style.display = "hidden";
    contentOne.innerHTML = "";
    contentTwo.style.display = "block";
    companyPage();
  }
}

// event listener that shows pages depening on the state of showMainPage
document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.id === "company") {
    if (showMainPage === false) return;
    showMainPage = false;
    showPages();
  }
  if (target.id === "menu") {
    if (showMainPage === true) return;
    showMainPage = true;
    showPages();
  }
});


