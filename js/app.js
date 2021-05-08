


/*1.    
    Variables
*/

const sections = document.querySelectorAll("section");


const navigationbar = document.getElementById("NavigationBarUL");


const pagefragment = document.createDocumentFragment();


const accordion = document.getElementsByClassName("SectionAccordionClass");





/*2.    
    Navigation Bar
    For Each with an event listener 
    to click smoothly.
*/

sections.forEach((elm, _index) => {
    let pagelinkstext = elm.getAttribute("data-nav");
    let pagenewlinks = document.createElement("a");
    let pagenewlistitems = document.createElement("li");
    let pagetextnode = document.createTextNode(pagelinkstext);
    pagenewlinks.appendChild(pagetextnode);
    pagenewlistitems.appendChild(pagenewlinks);
    pagenewlinks.addEventListener('click', () => {
        elm.scrollIntoView({ behavior: "smooth" });
    })
    pagefragment.appendChild(pagenewlistitems);
});


navigationbar.appendChild(pagefragment);


window.addEventListener("scroll", () => {
    sections.forEach((pagesection, _index) => {
        const docreact = pagesection.getBoundingClientRect();
        const pagenavsection = pagesection.getAttribute("data-nav");
        if (docreact.top > 0 && docreact.top < 410) {
            //alert(pagesection.getAttribute("data-nav")+ docreact.top);
            sections.forEach((activesection) => {
                activesection.style.background = "transparent";
            })
            pagesection.style.backgroundImage = "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)";
            pagesection.style.backgroundColor = "#7f5a83";
            pagesection.style.opacity ="75%";
            pagesection.style.textAlign="center";
            pagesection.style.height="100vh";


            const pagealinks = document.querySelectorAll("a");
            pagealinks.forEach((pagealink) => {
                if (pagealink.innerText == pagenavsection) {
                    pagealinks.forEach((deletealink) => {
                        deletealink.style.background = "transparent";
                    })
                    pagealink.style.background="#b3cdd1";
                    pagealink.style.borderRadius="25%";
                    pagealink.style.width="100%";
                    pagealink.style.textAlign="center";
                   
                }
            })
        }

    });


})


/*3. Side Bar OverLay Nav*/

/* Reference Used
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay2
*/



function openNavigationBar(){
    navigationbar.style.height="65%";
    navigationbar.style.width="10%";
    navigationbar.style.marginRight="150px";
    navigationbar.style.opacity="90%";
    navigationbar.style.marginTop="55px";
    navigationbar.style.borderRadius="5%";
    navigationbar.style.overflowX="hidden"
    navigationbar.style.textAlign="left";

    
    

}


function closeNavigationBar(){
    navigationbar.style.height="0%"
    navigationbar.style.height="0%";
    navigationbar.style.overflowX="hidden";
    navigationbar.style.marginLeft="0%";

}




/* Accordion */ 

var x; 

for (x=0; x < accordion.length; x++){
    accordion[x].addEventListener('click', function(){

        /*
        Toggling Between 
        removing and adding the 
        activeClass 
        When highlighting the button that modifies 
        the panel 
        
        */



    this.classList.toggle("activeClass");

const sectionpanel = this.nextElementSibling;
    if(sectionpanel.style.display === "block"){
        sectionpanel.style.display="none";
    }else {
        sectionpanel.style.display="block";
    }
    });
}









































/* Top of Page Button*/



// Return Top Button 

function scrollTopfunction() {
    if (document.body.scrollTop > 1050 ||
      document.documentElement.scrollTop > 1050) {
        topbtnclass.style.display = "block";
    } else {
        topbtnclass.style.display = "none";
    }
  }
  
  
  // At user click return to top of page for chrome , safari , firefox & most modern browsers
  
  function pushtopfunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  



















setTimeout(function(){alert("User Time Out Message :\n10 minutes ");}, 600000)


