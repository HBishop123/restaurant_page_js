import mainPage from "./main_page.js";
import companyPage from "./company_page.js";




let showMainPage = true

function showPages(){
if(showMainPage){

document.querySelector('#content1').style.opactiy = "block"
document.querySelector('#content2').style.display = "none"
document.querySelector('#content2').innerHTML = ""
mainPage()
}else {
    
    document.querySelector('#content1').style.display = "none"
    document.querySelector('#content1').innerHTML = ""
    document.querySelector('#content2').style.display = "block"
    companyPage()
}
}

document.addEventListener('click', (e) =>{
    const target = e.target
    if(target.id = "company"){
        showMainPage = false
        showPages()
    }
})

showPages()