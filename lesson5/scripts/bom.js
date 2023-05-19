const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    const chapter = input.value;
    input.value = "";

    const listchapter = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listchapter.appendChild(listText);
    listText.textContent = chapter;
    listchapter.appendChild(listButton);
    listButton.textContent = "❌";
    list.appendChild(listchapter);

    listButton.addEventListener("click", ()=>{
        list.removeChild(listchapter);
    });

    input.focus();
});


const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();