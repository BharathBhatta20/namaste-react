What is npm ?
npm is the one of the largest package manager which maintains the packages/library which we need in our application.

What is webpack/parcel ?
Webpack/Parcel is the bundler widely used in the React and other technology to comprress your file and make them production ready.

npm install -D parcel -> 
Two types of dependency 
devdependency - Only development purpose - D
dependency - Need for Prod as well 

^ - caret 

What is package.json and package.lock.json ?
Configuartion for the project and it checks and install the version of package
Will check the exact version of the package which is installed

What is Tree Shaking?
Parcel will remove the uncalled files from the scope when only certain files are called.

What is Hot Module Replacement?
HMR is special ability of the parcel to load or render the and build a new copy of the code when ever a changes is made for the files.

What is npx?
npx is command to execute a library. 
npm is a command to install the library.

What is parcel.cache ?
parcel.cache is a file created by parcel while a build command is triggered, It uses this file to keep some cache and help in faster rebuilding of the application.

List down 5 superpowers of Parcel and describe any 3 ?
HMR
Tree Shaking
Differential Bundling - ability of Parcel to create a separate build to support the different browser.
Error Handling
Compress

What is .gitignore?
It is file we create to mention what should not be considered as a new change for Git
node_modules and dist folder should be ingored and any other file which we can create.
Package.json and package.lock.json should be added.

