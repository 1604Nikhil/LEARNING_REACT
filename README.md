 
 ### We created a package.jsosn file with the help of npm init command.
  and this package.json is a configuration for npm it keeps a track of what version of that package is installed in our system.



  
 ###  The most important package in our project is a bundler(Webpack,parcel).
    So basically what bundler does is that it bundles all your code and make it ready to ship the code to production.
 


 ### There are two types of dependencies we can install 
    1.dev dependencies --> These are required for in a developement phase when we are developing our apps.  (npm install -D parcel) // we can -D to specify it as a dev dependency.
    2.normal dependencies --> These are used in production also.
 
###  So whenever we install a new dependecies ,so inside the dependencies we have the dependencies like this ("parcel": "^2.8.3" 1.#carrot --> parcel will be upgraded to 2.8.4 it performs minor upgrades, and  "~2.8.3" 2.#tidle it will install the major version immedialtely here 3.3.0.
 
 ### when we have installed npm i parcel we also get a file called package-lock.json .
  #package-lock.json --> It keeps a record of the versions  of every package in our dependencies.
  #node modeules folder --> this contains all the code that we fetched from npm,it is a collection of dependencies just like a database .
 
 ### transitive dependencies --> we have npm parcel but we have so many folder apart from parcel bcz parcel has it own dependencies on other packages and the other packages have their own dependencies on other packages and so on this is called transitive dependencies.
 

 # So now we want that our node modules folder does not push to the production or to the github as for doing this we can add a file called .gitignore.

 # WHY WE DONT NEED TO PUSH node_modules ON TO GITHUB AND WHY packagr.json and package-lock.json are important or necessary to put on github.

 If you have package.json and package-lock.json you can recreate the node_modules. You just need to do npm install and then the node_modules will get install.

### TO ignite our app --> we will use the command npx parcel index.html(source file)(index.html is the source).

### Just like we have npm similarly we have npx and it means executing that package.

EX--> npx parcel index.html : Here we are executing the parcel package.

### To use React.createElement and other react features like ReactDom.createRoot() we require to import React and ReactDOM. 

### <script type="module" src="app.js"></script> so by using type="module" we get rid of error : Browser scripts cannot have imports or exports.

# Parcel
- It creates a Dev Build
- It creates a Local Server
- HMR - Hot Module Replacement(automatically refreshing your page).
- For HMR it uses,(Parcel uses )a File Watching Algorithm (written in C++)(what changes happened in the file )
- Faster Builds bcz it is also doing Caching(.parcel-cache). 
- Image optimization.
- When you make a production build,Minification our code and bundling of file,compress file.
- Consistent Hashing 
- Code Splitting.
- Differential Bundling - to support older browsers different bundle for different type of browsers and also browser version.
- Diagonstic
- Erorr Handling
- HTTPS
- Tree Shaking - remove unused for you (the code you are not using it).
- Different dev and production bundlers.

### Production build with parcel here we need to remove "main": "app.js" from package.json bcz we specify the entry point in the command itsel like (npx parcel index.html) (npx parcel build index.html)

### Lets male our app compatable for older versions of browser (browsers list in node_modules) -- we will add browserList in package.json.

                                               ----------------------------LAYING THE FOUNDATION-------------------------------                      

### npm run start and npm run build --> We added the start script in package.json to run our project(npm start) and to build our project for production we use npm run build.

### React Element
   React.createElement is an object and when we render it on DOM then it becomes an HTML element.

### JSX 
   -->JSX is a javascript syntax to create react elements.
   -->JSX is not HTML inside javascript.
   -->JSX is a HTML like or XML like syntax.

   ### When you console React.createElement variable and a jsx variable they both are one and the same thing.i.e,an object.
 
   ### const root = ReactDOM.createRoot(document.getElementById('root'))
    //This above syntax is not a valid js syntax behind the scenes parcel is transpiling the code that JS engine can understand,and parcel do t  he job with help of babel(JS compiler/transpiler).

   ### Behind the Scenes how your jsx code is rendered on DOM.
      // JSX --> Babel transpiles to React.createElement --> ReactElement(JS Object) --> HTML Element(on DOM).
      Therefore JSX and React.createElement are on and the same thing.
      And Babel is converting the code ,JSX to React.createElement.

### Components in react 
    // 1.Class based components 
    // 2.Functional components

   ### Functional components --> It's just a normal JS function with returns some JSX element or React Element (that JSX is kind of React elememt).

   ### Babel is all transpiling the Components in React code and with help of root.render React renders the code(in HTML ) on the browser that the browser understnads.

   ### We can write any valid javascript expressions inside the JSX (in Functional component).

   ### How JSX takes care of cross-site scripting attacks --> whenever some data is inside the {} the browser wont blindly run it it will sanitise the data and then run it.

   ### {Title()} , <Title/> , <Title></Title> these all three things are one and the same thing.