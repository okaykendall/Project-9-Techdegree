//script for hover actions on dropdown menu
//constants declared here

const aboutLink = document.querySelector(".about-link");
const portfolioLink = document.querySelector(".port-link")
const contactLink = document.querySelector(".contact-link")

//about click event listener
aboutLink.addEventListener ("mouseover", function() {
    
    this.textContent = 'moi';
    });

aboutLink.addEventListener( "mouseout", function() {
    
this.textContent= "about"
});

//portfolio hover event

portfolioLink.addEventListener ("mouseover", function() {
    
    this.textContent = 'check it out';
    });

portfolioLink.addEventListener( "mouseout", function() {
    
this.textContent= "portfolio"
});

//contact event listener

contactLink.addEventListener ("mouseover", function() {
    
    this.textContent = 'fax me';
    });

contactLink.addEventListener( "mouseout", function() {
    
this.textContent= "contact"
});

