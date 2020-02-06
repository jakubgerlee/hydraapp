"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below
const addButton = document.querySelector(".button-add--js");
const removeButton = document.querySelector(".button-remove--js");
const counterValue = document.querySelector(".counter__value--js");
let key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
} else {
  counterValue.innerHTML = localStorage.getItem(key);
}

addButton.addEventListener("click", () => {
  console.log(counterValue.innerHTML);
  localStorage.setItem(key, counterValue.innerHTML++);
});

removeButton.addEventListener("click", () => {
  if (parseInt(counterValue.innerHTML) > 0) {
    let value = counterValue.innerHTML--;
    localStorage.setItem(key, value.toString());
  }
});
