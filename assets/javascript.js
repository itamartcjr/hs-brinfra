"use strict";


function splitObjectIntoChunks() {
    const projectList = document.querySelector(".project_list");
    const contianerProjects = document.querySelector(".list_container");
    const projects = document.querySelectorAll(".project");
    const boxlists = document.querySelectorAll(".box_list");

    const quantityProjectsInners = Math.floor(projectList.clientWidth / projects[0].clientWidth);

    const entries = Object.entries(projects);


    console.log(quantityProjectsInners);

    for(let box of boxlists){
        box.remove();
    }

    for (let i = 0; i < entries.length; i += quantityProjectsInners) {
        const div = document.createElement("div");
        div.classList.add("box_list");
        contianerProjects.appendChild(div);

        const arrays = entries.slice(i, i + quantityProjectsInners).map(entry => entry[1]);
        arrays.forEach((array) => {
            div.appendChild(array);
        });
    }
}

splitObjectIntoChunks()
window.addEventListener('resize', () => {
    console.log("resize");
    splitObjectIntoChunks()
}
);
const boxList = document.querySelectorAll(".box_list");
boxList[0].classList.add("selected");