const inputBox = document.getElementById("input-box")
const listContainer= document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}


listContainer.addEventListener("click", function(e) {
    console.log("Clicked element:", e.target.tagName); // Check what is being clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        console.log("Class toggled:", e.target.className);
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        console.log("Item removed");
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();