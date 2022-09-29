//// //// //// MAIN PAGE BUTTON ANIMATION

// Selectors 
const sideButtons = document.querySelectorAll("a.sidebar-links")
const buttonContent = document.querySelectorAll("span.button-content")

const resumeLink = document.getElementById("resume-link")
const portLink = document.getElementById("port-link")

const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")

// helper function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Event listeners
portLink.addEventListener("mouseover", evt => {
  let button = evt.target;

  button.style.width = "150px"

  delay(200).then(() => {
    button1.style.visibility = "visible"
    button1.style.position = "initial"
  })
})

resumeLink.addEventListener("mouseover", evt => {
  let button = evt.target;

  button.style.width = "150px"

  delay(200).then(() => {
    button2.style.visibility = "visible"
    button2.style.position = "initial"
  })
})
sideButtons.forEach(elements => {

  elements.addEventListener("mouseleave", evt => {
    let button = evt.target;

    button.style.width = "70px";

    buttonContent.forEach(elements => {
      elements.style.visibility = "hidden"
      elements.style.position = "absolute"
    })
  })
})

//// //// //// PROJECT CARD HOVER ANIMATION
// Selectors
const topCards = document.querySelectorAll("div.top-card")
const bottomCards = document.querySelectorAll("div.bottom-card")

// Event listeners
topCards.forEach(elements => {
  const links = document.querySelectorAll("a.card-individual-links")
  const children = document.querySelectorAll("img.card-image, h1.card-title")

  elements.addEventListener('mouseover', evt => {
      let card = evt.target;

      // card.style.opacity = "0"
      card.style.visibility = "hidden";

      children.forEach(elements => {
        if (card.children === elements) {
          // card.style.opacity = "0"
          elements.style.visibility = "hidden"
        } else return;
      })  
  })
})

bottomCards.forEach(elements => {
  elements.addEventListener('mouseleave', evt => {
      topCards.forEach(elements => {
          elements.style.visibility = "visible"
      })

  })
})

//   elements.addEventListener('mouseleave', evt => {
//       let card = evt.target;

//       card.style.opacity = "100";

//       children.forEach(elements => {
//         elements.style.opacity = "100"
//       })

//       links.forEach(elements => {
//           elements.style.zIndex = "1"
//       })
//   })

