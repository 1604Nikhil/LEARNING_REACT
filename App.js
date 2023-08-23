import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Heading using JSX</h1>;
//This above syntax is not a valid js syntax behind the scenes parcel is transpiling the code that  JS engine can understand.

//React Element
// Note --> Everytime name the component starting with capital letter.

const TitleComponent = () => <h1>This is our Title Component</h1>;

const birthDay = 16;

const HeadingComponent = () => {
  return (
    <>
    {/* Component composition. --> Composing components into one another. */}
      <TitleComponent />
      <p>This is my birthdate : {birthDay}. </p>
      <h2>This is our functional component.</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
