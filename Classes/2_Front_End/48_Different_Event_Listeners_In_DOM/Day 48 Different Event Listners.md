# What is an Event Listener?

An event listener is a JavaScript mechanism that waits for a specific event to occur on an element (user action or browser action) and then executes a callback function.

Syntax:

```javascript
element.addEventListener("eventName", callbackFunction);
```

## Mouse Events

### click

Triggered when an element is clicked.

Use case: Buttons, links, actions.

```javascript
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### dblclick

Triggered on double click.

```javascript
box.addEventListener("dblclick", () => {
  console.log("Double clicked");
});
```

### mousedown

Triggered when mouse button is pressed.

```javascript
box.addEventListener("mousedown", () => {
  console.log("Mouse button pressed");
});
```

### mouseup

Triggered when mouse button is released.

```javascript
box.addEventListener("mouseup", () => {
  console.log("Mouse button released");
});
```

### mouseenter

Triggered when mouse enters an element (does NOT bubble).

```javascript
box.addEventListener("mouseenter", () => {
  box.style.background = "blue";
});
```

### mouseleave

Triggered when mouse leaves an element.

```javascript
box.addEventListener("mouseleave", () => {
  box.style.background = "red";
});
```

### mouseover

Triggered when mouse enters an element or its child (bubbles).

```javascript
box.addEventListener("mouseover", () => {
  console.log("Mouse over");
});
```

### mousemove

Triggered when mouse moves.

```javascript
document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});
```

## Keyboard Events

### keydown

Triggered when a key is pressed.

```javascript
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

### keyup

Triggered when a key is released.

```javascript
document.addEventListener("keyup", (e) => {
  console.log("Key released:", e.key);
});
```