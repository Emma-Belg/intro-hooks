## To Do List App
Have a look at the finished app [here](https://emma-belg.github.io/intro-hooks/).

Followed a short tutorial on **react hooks** from [youtube here](https://www.youtube.com/watch?v=mxK8b99iJTg).  
The youtube tutorial is based on [this text tutorial](https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components) found on scotch.io.  

Deployed react app using:  
1. in terminal: `npm install gh-pages --save-dev`
2. in package.json:  
  a. At the very top: `"homepage": "https://emma-belg.github.io/intro-hooks/"`  
  b. Inside of the scripts object: 
  ```    
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  ```
3. save everything, push everything  
4. make an environment on github  
5. push everything  
6. in terminal:  `npm run deploy`.  
7. go into the environment settings on github and change the branch to the gh-pages branch.  
  
You should now be able to see your app on github.  
  
I had this error " A branch named 'gh-pages' already exists.".  
If you have any trouble with deploying, delete the package-lock.json file and the entire node_modules folder and run npm install again.  
  
If you make any changes in the future you will have to rerun `npm run deploy`.
