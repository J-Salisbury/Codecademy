console.log("its working");

// grab h1
const h1Element = document.querySelector("h1");

//text Content
h1Element.textContent = "It's Alive!!!!";

// Element, NodeList, HTMLCollection
// NodeLists are returned from the querySelectorAll
//Arra.from(NodeList) - to access a single node / element

const h2NodeList = document.querySelectorAll("h2");
const h2Array = Array.from(h2NodeList);
h2Array[0].textContent = "I updated the index 0"

// Inner HTML to update what is inside of the element that we grabbed
const aside = document.querySelector("aside");
aside.innerHTML = "<h2>Did this work?</h2>";

// create an element that isn't attached in the dom
const divElement = document.createElement("div");
divElement.textContent = "This is my new div";

//place below child element
aside.appendChild(divElement);

//place before
aside.prepend(divElement);

// setAttribute / getAttribute
//manipulating a class list
// modifying styles