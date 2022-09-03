// card slid down
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const portLinkEl = document.getElementById("top-circle").firstChild
const resumeLinkEl = document.getElementById("bottom-circle").firstChild
let open = true;

// function slideOpen(evt) {
//     evt.target.innerText = "< / > Portfolio"
// }

// function slideClose(evt) {
//   evt.target.innerText = "< / >"
// }

portLinkEl.addEventListener("mouseover", evt => {
  evt.target.innerText = "< / > Portfolio"
})

portLinkEl.addEventListener("mouseleave", evt => {
  evt.target.innerText = "< / >"
})

// resumeLinkEl.addEventListener("mouseover", evt => {
//   evt.target.innerText = "📄 Resume";
// })

// resumeLinkEl.addEventListener("mouseleave", evt => {
//   evt.target.innerText = "📄"
// })

// portLinkEl.addEventListener("mouseover", slideOpen())
// portLinkEl.addEventListener("mouseleave", slideClose())
