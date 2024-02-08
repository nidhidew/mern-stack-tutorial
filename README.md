# mern-stack-tutorial

- it is considered as full stack too.
- in full stack project there is one section for backend code and other section of frontend code and they both are combined.
- the backend of mern stack is REST API
- REST API is an interface between 2 computers use to exchange information securly over internet
- frontend send requests to backend and that operation is called crud operation. Create, Read, Update, Delete.
- Crud operation shows that which http request will be perfomed in frontend
- create = post read = get update = patch/put delete = delete


## Chapter 1

- so in this we learn to setup a nodejs part of the project which is backend. 
- Follow steps:
    * command run npm init. it will create package.json file
    * run npm install which will install node_modules
    * write a .gitignore file which help you to igonre those files which are not should be committed in git repo
    * install express and nodeman
- now backend part is set. next we will create server file which is used for server related operations 
- after that create root file for navigating the frontend pages.
- right now if we run `npm run dev` then we can start the server and access the frontend pages.

## Chapter 2

- so in this we learn about the Middleware.
- Middleware is 1 or more functions that are placed in the path of requests that are received by the backend API
- Middleware can additional functionality for the api
- it can also apply some preliminary process into requests before they get to the controller where the request processing will be completed
- 3 types of middleware
 * Built-in
 * Custom
 * 3rd party

- express.static is middleware from chapter 1

## Chapter 3

- so in this we learn about the MongoDB
- mongodb is a nosql database built with collections of documents
- here we will integrate mongodb into our rest api
- have to install mongoose and create a account in mongodb
- after that create a database and then follow the steps for connecting mongodb to over server

## Chapter 4

- in this we are going to create controllers
- in MERN project controllers are a part of the server-side architecture.
- Controllers are responsible for handling incoming http request, processing the request , interacting with the database
  and returning an appropriate http response
- first we write some logics for get,post,patch and delete methods in controllers and set routes which will help to 
    redirect to that request
- connect those routes and controllers to the server 
- then test/try those request 
- for testing those endpoints we will use postman and start the mongodb website to active the ip address
- now one by one use those endpoints

## Chapter 5

- in this we are going to create react project which is frontend part
