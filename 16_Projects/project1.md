# Project related to DOM

Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zzngjr?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

Project1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(body);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    //eventlistner to change when we click on button
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
