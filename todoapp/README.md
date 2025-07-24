README.md = the md here is markdown

## Todo App

This project contains a simple TODO App
The features are :-
- Anyone can create a todo
- See their existing to-dos
- Mark a todo as done

Generally a good idea for bulding an app is to first build the backend and then move to the frontend

1. Create a backend folder
2. Initialize a Node project (package.json) -- Navigat to the backend folder and run "npm init"
3. Then install express - npm install express - in  package.json the dependencies is the place where all the external dependencies are listed
4. Node modules are the libraries required for our app to function, if we do not need it we can remove it
5. IF by mistake we remove it after but we have ran npm install express once, the package.json has tjhe exhaustive list of all the files present in the folder, so we can just run "npm install" and it will get back in the folder as 'node modules'
6. We never share node modules with anyone, always delete it before sharing your project


7. next writing the routes and express server on the index.js

8. Now we also need to get the validation for the input, that the user is providing the input in such a way, that needs to be defined, for that we make a file types.js --> we also need to install zod for the same using "npm install zod"

9. Write the routes and connect it to the zod schema (index.js -- types.js)
10. Create db.js for mongodb
11. Install mongoose "npm install mongoose"
12. Always put the mongodb url in .env files for security and we do not show it publicly