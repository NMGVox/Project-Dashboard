function addButtons() {
    let proj_button_list = Array.from(document.querySelectorAll(".proj-buttons"));
    let main_area = document.querySelector(".main-area");

    let icons = [];
    let list_array = [];
    
    icons.push(document.createElement("object"));
    icons[0].setAttribute("data", "./images/svg/thumb-up.svg");
    icons[0].setAttribute("type", "image/svg+xml");

    
    icons.push(document.createElement("object"));
    icons[1].setAttribute("data", "./images/svg/share.svg");
    icons[1].setAttribute("type", "image/svg+xml");

    
    icons.push(document.createElement("object"));
    icons[2].setAttribute("data", "./images/svg/note.svg");
    icons[2].setAttribute("type", "image/svg+xml");

    proj_button_list.forEach(proj => {
       for(let i = 0; i < 3; i++){
            let li = document.createElement("li");
            li.appendChild(icons[i]);
            proj.appendChild(li.cloneNode(true));
       }
    });


}

window.onload = (addButtons);