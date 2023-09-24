window.addEventListener("DOMContentLoaded", () => {
  // hamburger
  const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu");
  
  hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  });
  
  menu.addEventListener("click", (e) => {
  const target = e.target;
  
  if (
    (target && target.closest(".menu__close")) ||
    target.matches(".menu__overlay")
  ) {
    menu.classList.remove("active");
  }
  });

  // skills levels
  const percents = document.querySelectorAll('.skills-level__item-percent'),
        lines = document.querySelectorAll('.skills-level__item-level_orange');

  percents.forEach((item, i) => {
    lines[i].style.width = item.textContent;
  })

  //scroll
  window.addEventListener('scroll', () => {
    const asideSVG = document.querySelectorAll('.sidepanel__link'),
          asideDiveder = document.querySelector('.sidepanel__divider'),
          asideText = document.querySelector('.sidepanel__text');

    if (scrollY > 320) {
      asideSVG.forEach(item => item.classList.add('sidepanel__link_black'));
      asideText.classList.add('sidepanel__text_black');
      asideDiveder.classList.add('sidepanel__divider_black');
    } else {
      asideSVG.forEach(item => item.classList.remove('sidepanel__link_black'));
      asideText.classList.remove('sidepanel__text_black')
      asideDiveder.classList.remove('sidepanel__divider_black');
    }
  }); 
});
