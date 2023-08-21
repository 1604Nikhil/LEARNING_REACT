import React from "react";
import  ReactDOM  from "react-dom/client";

 const jsxHeading = <h1>Heading using JSX</h1>
 //This above syntax is not a valid js syntax behind the scenes parcel is transpiling the code that  JS engine can understand.  

 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(jsxHeading);
