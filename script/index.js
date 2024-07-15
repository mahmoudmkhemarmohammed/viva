const iconBars = document.querySelector("header .container i"),
  ulList = document.querySelector("header .container ul"),
  btnScroller = document.querySelector(".btn-scroller"),
  h3Counter = document.querySelectorAll(".home .container .text .info .content h3")
iconBars.onclick = () => {
  iconBars.classList.contains("fa-bars")
    ? (iconBars.className = "fa-solid fa-close")
    : (iconBars.className = "fa-solid fa-bars");
  ulList.classList.toggle("show");
};
window.addEventListener("scroll" , () => {
  if(scrollY >= 700) {
    btnScroller.style.display = 'block'
  }
  else {
    btnScroller.style.display = 'none'
  }
})
btnScroller.addEventListener("click" , () => {
  scroll({top:0,
    behavior:"smooth"
  })
})
function counter(el){
  let goal = el.dataset.goal;
  let count = setInterval( _ => {
      el.textContent++
      if(el.textContent === goal){
          clearInterval(count);
      }
  },2000 / goal)
}
h3Counter.forEach(h3 => counter(h3))