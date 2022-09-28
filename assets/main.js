// PROJECT CARD HOVER ANIMATION


// Selectors
const topCard = document.querySelectorAll("div.top-card")

// Event listeners
topCard.forEach(elements => {
  const links = document.querySelectorAll("a.card-individual-links")
  const children = document.querySelectorAll("img.card-image, h1.card-title")

  elements.addEventListener('mouseover', evt => {
      let card = evt.target;

      card.style.opacity = "0";

      children.forEach(elements => {
        if (card.children === elements) {
          elements.style.opacity = "0"
        } else return;
      })
  })
  elements.addEventListener('mouseleave', evt => {
      let card = evt.target;

      card.style.opacity = "100";

      children.forEach(elements => {
        elements.style.opacity = "100"
      })
  })
})


