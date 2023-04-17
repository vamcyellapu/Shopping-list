"use strict";

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};
const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem.value === "") {
    alert("Please add an item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const createButton = (classes) => {
    const button = document.createElement("button");
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    button.className = classes;

    return button;
  };

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
};

// Event listeners
itemForm.addEventListener("submit", addItem);
