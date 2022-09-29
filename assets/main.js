//// //// //// HELPER FUNCTIONS //// //// ////

// delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


//// //// //// MAIN PAGE BUTTON ANIMATION //// //// ////

// SELECTORS 
const sideButtons = document.querySelectorAll("a.sidebar-links")
const buttonContent = document.querySelectorAll("span.button-content")

const resumeLink = document.getElementById("resume-link")
const portLink = document.getElementById("port-link")

const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")


// EVENT LISTENERS

// portfolio button event
const portfolioEvent = () => {
  portLink.addEventListener("mouseover", evt => {
    let button = evt.target;
    button.style.width = "150px"

    delay(200).then(() => {
      button1.style.visibility = "visible"
      button1.style.position = "initial"
    })
  });
}

// Resume button event
const resumeEvent = () => {
  resumeLink.addEventListener("mouseover", evt => {
    let button = evt.target;
    button.style.width = "150px"
    
    delay(200).then(() => {
      button2.style.visibility = "visible"
      button2.style.position = "initial"
    })
  });
}
 
// calling button events
sideButtons.forEach(elements => {
  portfolioEvent();
  resumeEvent();
  elements.addEventListener("mouseleave", evt => {
    let button = evt.target;

    button.style.width = "70px";

    buttonContent.forEach(elements => {
      elements.style.visibility = "hidden"
      elements.style.position = "absolute"
    })
  })
})

//// //// //// PROJECT CARD HOVER ANIMATION //// //// ////

// SELECTORS
const topCards = document.querySelectorAll("div.top-card")
const bottomCards = document.querySelectorAll("div.bottom-card")

// EVENT LISTENERS
topCards.forEach(elements => {
  // Hover event
  elements.addEventListener('mouseover', evt => {
    let card = evt.target;
    card.style.opacity = "0"

    if (card.style.opacity === "0") {
      delay(400).then(() => {
        card.style.visibility = "hidden";
      })
    }
  }) 
})
// Mouse leave event
bottomCards.forEach(elements => {
  elements.addEventListener("mouseleave", evt => {
    topCards.forEach(elements => {

      elements.style.opacity = "100"
      elements.style.visibility = "visible"

    })
  })
})

