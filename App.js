import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>Heading using JSX</h1>;
// //This above syntax is not a valid js syntax behind the scenes parcel is transpiling the code that  JS engine can understand.

// //React Element
// // Note --> Everytime name the component starting with capital letter.

// const TitleComponent = () => <h1>This is our Title Component</h1>;

// const birthDay = 16;

// const HeadingComponent = () => {
//   return (
//     <>
//
//       <TitleComponent />
//       <p>This is my birthdate : {birthDay}. </p>
//       <h2>This is our functional component.</h2>
//     </>
//   );
// };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?w=740&t=st=1692898904~exp=1692899504~hmac=bac74cc6723d30da985a26affa9928a47b539514b3c5d3990f84b9637b86e1c9"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return <div className="app">{Header()}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
