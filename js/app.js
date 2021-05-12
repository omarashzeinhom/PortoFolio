/*1.    
    Variables
*/

const pgsections = document.querySelectorAll("section");


const navigationbar = document.getElementById("NavigationBarUL");


const pagefragment = document.createDocumentFragment();


const accordion = document.getElementsByClassName("SectionAccordionClass");


const imgelements = document.getElementsByClassName("columnRows");


const imgrows = document.getElementsByClassName("imagesRows");





/*2.    
    Navigation Bar
    For Each with an event listener 
    to click smoothly.
*/

pgsections.forEach((elm, _index) => {
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
    pgsections.forEach((pagesection, _index) => {
        const docreact = pagesection.getBoundingClientRect();
        const pagenavsection = pagesection.getAttribute("data-nav");
        if (docreact.top > 0 && docreact.top < 410) {
            //alert(pagesection.getAttribute("data-nav")+ docreact.top);
            pgsections.forEach((activesection) => {
                activesection.style.background = "transparent";
            })
            pagesection.style.backgroundImage = "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)";
            pagesection.style.backgroundColor = "#7f5a83";
            pagesection.style.opacity = "75%";
            pagesection.style.textAlign = "center";
            pagesection.style.height = "100vh";
            pagesection.style.scrollBehavior="smooth";


            const pagealinks = document.querySelectorAll("a");
            pagealinks.forEach((pagealink) => {
                if (pagealink.innerText == pagenavsection) {
                    pagealinks.forEach((deletealink) => {
                        deletealink.style.background = "transparent";
                    })
                    pagealink.style.background = "#b3cdd1";
                    pagealink.style.borderRadius = "25%";
                    pagealink.style.width = "100%";
                    pagealink.style.textAlign = "center";
                    pagealink.style.scrollBehavior="smooth";

                }
            })
        }

    });


})


/*3. 
Side Bar OverLay Nav
*/

/* Reference Used
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay2
*/



function openNavigationBar() {
    navigationbar.style.height = "100%";
    navigationbar.style.maxHeight="35%";
    navigationbar.style.width = "100%";
    navigationbar.style.maxWidth="30%";
    navigationbar.style.marginRight = "150px";
    navigationbar.style.opacity = "90%";
    navigationbar.style.marginTop = "55px";
    navigationbar.style.borderRadius = "5%";
    navigationbar.style.overflowX = "hidden"
    navigationbar.style.textAlign = "left";
    navigationbar.style.scrollBehavior="smooth";




}


function closeNavigationBar() {
    navigationbar.style.height = "0%"
    navigationbar.style.height = "0%";
    navigationbar.style.overflowX = "hidden";
    navigationbar.style.marginLeft = "0%";

}




/* Accordion */

var x;

for (x = 0; x < accordion.length; x++) {
    accordion[x].addEventListener('click', function () {

        /*
        Toggling Between 
        removing and adding the 
        activeClass 
        When highlighting the button that modifies 
        the panel 
        
        */



        this.classList.toggle("activeClass");

        const sectionpanel = this.nextElementSibling;
        if (sectionpanel.style.display === "block") {
            sectionpanel.style.display = "none";
        } else {
            sectionpanel.style.display = "block";
        }
    });
}



/* Image Grid 1,2 & 4 Functions */

var y;
function singleimg() {

    for (y = 0; 0 < imgelements.length; y++) {
        imgelements[y].style.flex = "100%";
    }
}



function doubleimg() {

    for (y = 0; y < imgelements.length; y++) {
        imgelements[y].style.flex = "50%";
    }
}



function quadrupleimg() {

    for (y = 0; y < imgelements.length; y++) {
        imgelements[y].style.flex = "25%";
    }
}






/* Image Zoom Lens */

function zoomImages(imagesID, resultsID) {
    var imgzoom, lenszoom, resultszoom, cxzoom, cyzoom;
    imgzoom = document.getElementById(imagesID);
    resultszoom = document.getElementById(resultsID);
    /* 
    Making the 
    Zoom Lens*/
    lenszoom = document.createElement('div');
    lenszoom.setAttribute("class", "imagesZoomLens");
    /*
    Applying the 
    ZoomLens
    */
    imgzoom.parentElement.insertBefore(lenszoom, imgzoom);

    /* Calculating 
    The Ratio Between 
    the div results 
    & the zoomlens
    */
    cyzoom = resultszoom.offsetHeight / lenszoom.offsetHeight;
    cxzoom = resultszoom.offsetWidth / lenszoom.offsetWidth;


    /* 
    Setting 
    the 
    Background 
    Property 
    for the Results Div
    */

    resultszoom.style.backgroundImage = "url('" + imgzoom.src + "')";
    resultszoom.style.backgroundSize = (imgzoom.width * cxzoom) + "px " + (imgzoom.height * cyzoom) + "px";


    /* 
    Exceuting a function , 
    when user moves 
    the cursor over the lens or image
    and for touch screens aswell
    */
    imgzoom.addEventListener("mousemove", movezoomLens);
    imgzoom.addEventListener("touchmove", movezoomLens);
    lenszoom.addEventListener("mousemove", movezoomLens);
    lenszoom.addEventListener("touchmove", movezoomLens);
    function movezoomLens(elementzoom) {
        var position, y, x;
        /*
        Prevent the other 
        actions that may occur
        when user scrolls over image
        */
        elementzoom.preventDefaultactions();
        /*Coordinates 
        retrieved for 
        positions of x and y
        */
        position = getCursorPosition(elementzoom);
        /* 
        Calculating 
        the position of the lens 
        */
        y = position.y - (lenszoom.offsetHeight / 2);
        x = position.x - (lenszoom.offsetWidth / 2);

        /*
         Preventing the lens 
         from being 
         positioned outside the img
        */
        if (x > imgzoom.width - lenszoom.offsetWidth) {
            x = imgzoom.width - lens.offsetWidth;
        }
        if (x < 0) { x = 0; }
        if (y > imgzoom.height - lenszoom.offsetHeight) { y = imgzoom.height - lenszoom.offsetHeight; }
        /*
         Setting
         the position 
         of the zoomlens
         */
        lenszoom.style.left = x + "px";
        lenszoom.style.top = y + "px";
        /*
        Displaying
        The vision 
        of the lens
    
        */
        resultszoom.style.backgroundPosition = "-" + (x * cxzoom) + "px -" + (y * cyzoom) + "px";

    }







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
function getCursorPosition(elementzoom){
    var azoom , xzoom =0, yzoom =0;
    elementzoom = elementzoom || window.event;
     /* Get the x and y positions of the image: */
     azoom = img.getBoundingClientRect();
     /* Calculate the cursor's x and y coordinates, relative to the image: */
     xzoom = elementzoom.pageX - azoom.left;
     yzoom  = elementzoom.pageY - azoom.top;
     /* Consider any page scrolling: */
     xzoom = xzoom - window.pageXOffset;
     yzoom  = yzoom  - window.pageYOffset;
     return {xzoom : xzoom, yzoom  : yzoom };

}




















setTimeout(function () { alert("User Time Out Message :\n10 minutes "); }, 600000)


