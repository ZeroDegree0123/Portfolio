// PROJECT CARD HOVER ANIMATION


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

