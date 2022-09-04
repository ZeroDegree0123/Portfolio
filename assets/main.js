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


// const linkEls = document.querySelectorAll("a.sidebar-links")
// const test = document.getElementById("port-link")

// test.addEventListener("mouseover", evt => {
//   evt.target.classList.add("active")
// })

// linkEls.forEach(element => {
//   element.addEventListener('mouseover', evt => {
//     evt.target.classList.add("active")
//   })
// })
// console.log(linkEls)