var bttn = document.querySelector("button");
var u_list = document.getElementById("#groceries");

function removeItem(ev) {
    var removeFromList = ev.target;
    removeFromList.parentNode.removeChild(removeFromList);
}

function addItem(ev) {
    li_item = document.createElement("li");
    item = prompt("Enter a new item for grocery list:");
    li_item.innerHTML = item;
    
    if (item) {
        groceries.appendChild(li_item);
        li_item.addEventListener("click", removeItem, false);
    }
}

bttn.addEventListener("click", addItem, false);