console.log("This is working");

// Click Event Start

// alert the user with a hello when they click on the hello button

// select the hello button
const helloButton = document.querySelector("#hello");

// add an event listener to that button
// addEventListner: takes in action/event (type), listener (function)

// within the event listenter we call alert to do the hello

const helloHandler = (event) => {
  console.log("Hello Handler was called");
  //alert("Hey, how are you doing!");
  console.log("current target", event.currentTarget);
  // stop any parent events from firing
  event.stopPropagation();
  console.log("target", event.target);
};

helloButton.addEventListener("click", helloHandler);

//Mouse Event Start

const h2 = document.querySelector("h2");

h2.addEventListener("mouseover", function (event) {
  //look at the event
  console.log("event", event);
  event.currentTarget.textContent = "Hey, watch where you're going.";
});

h2.addEventListener("mouseout", function (event) {
  event.currentTarget.textContent = "Keep out";
});

// Target vs. Current Target

//when you click in main what happens? what are the logs that are fired off
//what about when you click on the button
const mainElement = document.querySelector("main");

mainElement.addEventListener("click", function (event) {
  console.log("main event handler fired");
  console.log("current target", event.currentTarget);
  console.log("target", event.target);
});
