"use strict";

const openMenu = document.querySelector(".btn_nav");
openMenu.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("open");
});
