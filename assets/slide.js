"use strict";

const projectList = document.querySelector(".project_list");
const containerProjects = document.querySelector(".list_container");
let projects = Array.from(document.querySelectorAll(".project"));

const bullets = document.querySelector(".bullets");

let boxLists;
let bulletAll;
let isResize = false;

function splitObjectIntoChunks(isResize) {
    boxLists = document.querySelectorAll(".box_list");
    bulletAll = document.querySelectorAll(".bullet");

    const selectedBoxIndex = Array.from(boxLists).findIndex(box => box.classList.contains("selected"));

    const quantityProjectsInners = Math.floor(projectList.clientWidth / 300);

    boxLists.forEach((box, i) => {
        box.remove();
        bulletAll[i].remove();
    });

    for (let i = 0; i < projects.length; i += quantityProjectsInners) {
        const divBox = document.createElement("div");
        const ultimo = i + quantityProjectsInners >= projects.length;

        divBox.classList.add("box_list");
        if (i / quantityProjectsInners === selectedBoxIndex) {
            divBox.classList.add("selected");
        } else if (isResize && ultimo && -1 === selectedBoxIndex) {
            divBox.classList.add("selected");
        }
        containerProjects.appendChild(divBox);

        const chunk = projects.slice(i, i + quantityProjectsInners);
        chunk.forEach(project => {
            divBox.appendChild(project);
        });

        const divBullet = document.createElement("div");
        if (i / quantityProjectsInners === selectedBoxIndex) {
            divBullet.classList.add("selected");
        } else if (isResize && ultimo && -1 === selectedBoxIndex) {
            divBullet.classList.add("selected");
        }
        divBullet.classList.add("bullet");
        bullets.appendChild(divBullet);
    }

    updateBulletListeners();
}

function updateBulletListeners() {
    bulletAll = document.querySelectorAll(".bullet");
    boxLists = document.querySelectorAll(".box_list");

    bulletAll.forEach((bullet, i) => {
        bullet.addEventListener("click", () => {
            boxLists.forEach(box => box.classList.remove("selected"));
            bulletAll.forEach(bullet => bullet.classList.remove("selected"));
            boxLists[i].classList.add("selected");
            bullet.classList.add("selected");
        });
    });
}

splitObjectIntoChunks(false);
window.addEventListener('resize', () => {
    projects = Array.from(document.querySelectorAll(".project"));
    splitObjectIntoChunks(true);
});

if (projects.length > 0) {
    boxLists = document.querySelectorAll(".box_list");
    bulletAll = document.querySelectorAll(".bullet");

    if (boxLists.length > 0 && bulletAll.length > 0) {
        boxLists[0].classList.add("selected");
        bulletAll[0].classList.add("selected");
    }
    updateBulletListeners();
}
