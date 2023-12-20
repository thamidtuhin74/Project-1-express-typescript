# Express & Typescript 

## instalation

- Install Express &  TypeScript
    1. `npm init`
    2. `npm install express`
    3. `npm install -D typescript`
    4. `tsc --init` & customise tsconfige.json
     `"rootDir": "./src/","outDir": "./dist/”`
    5. `npm i --save-dev @types/node`
    6. `npm i --save-dev @types/express`
    7. `tsc` & run `node dist/server.js`
    8. `tsc -w`  use it for dynamically compile ts to js then no need to run comment `tsc` again and again
    9. `npm i nodemon`  & Customize package.json file 
    `"scripts": { 
     "start": "nodemon ./dist/app/server.js",
     "test": "echo \"Error: no test specified\" && exit 1" 
    },`
    10. `npm start`