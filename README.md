 
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