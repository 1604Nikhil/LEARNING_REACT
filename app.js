const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
console.log("heading",heading);

//Note --> At the end of the day this heading is an react h1 element and what is react element it is nothing but a normal javascript object. 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//Note --> What does this render method does,it takes the react element object and converts it into the h1 tag and put up into the DOM.
