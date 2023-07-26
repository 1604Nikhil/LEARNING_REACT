const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
//console.log("heading", heading); // --> This is an object ,it becomes the HTML that the browser understands.

//Note --> At the end of the day this heading is an react h1 element and what is react element it is nothing but a normal javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));

//Note --> What does this render method does,it takes the react element object and converts it into the h1 tag and put up into the DOM.

// Creating a nested tag structure.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
]);
root.render(parent);

// Here in render the heading or parent object converts itself into html and puts it on to the DOM.

/**
 * now i want sibling h2 tag after the h1 tag.
 * so the way to do it is that the third argument to the createElement is can be a single children or if we have to give more than one children we can put them into an array.
 */
