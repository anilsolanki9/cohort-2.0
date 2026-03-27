// React => Creating UI
// ReactDOM => React UI and Real DOM ko connect krna.

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello i am h1";
// document.body.appendChild(h1);

// console.log(React);
// console.log(ReactDOM);

/* ---------------------------------- */

// let h1 = React.createElement("h1", { id: "big", className: "bluish", style: { backgroundColor: "red", fontSize: "3rem" } }, "Hello i am h1");

// let main = document.querySelector("main");

// let root = ReactDOM.createRoot(main);
// root.render(h1);

/* ---------------------------------- */

let h1 = React.createElement("h1", { id: "big", className: "bluish", style: { backgroundColor: "blue", fontSize: "3rem" } }, "Hello i am h1");
let h2 = React.createElement("h2", { id: "small", className: "bluish", style: { backgroundColor: "blue", fontSize: "2rem" } }, "Hello i am h2");

let box = React.createElement("div", { id: "parent" }, [h1, h2]);

let main = document.querySelector("main");

let root = ReactDOM.createRoot(main);
root.render(box);

/* ---------------------------------- */
