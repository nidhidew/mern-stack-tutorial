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
- setting up the react project with required components

## Chapter 6

- in this we are integrating redux to manage state of application.
- Redux and rtk query
- Redux Toolkit (RTK) Query is a powerful tool that simplifies data fetching and caching in Redux applications. It provides a set of APIs to define and dispatch asynchronous data-fetching logic, as well as automatic caching and re-fetching of data.

Here's a brief overview of how to use RTK Query with Redux:

1. **Install Redux Toolkit:**
   If you haven't already, install Redux Toolkit in your project:
   ```bash
   npm install @reduxjs/toolkit
   ```

2. **Setup Redux Store:**
   Configure your Redux store using `configureStore` from Redux Toolkit and include the `api` reducer provided by RTK Query:
   ```javascript
   import { configureStore } from '@reduxjs/toolkit';
   import { apiSlice } from './apiSlice';

   const store = configureStore({
     reducer: {
       [apiSlice.reducerPath]: apiSlice.reducer,
     },
     // Middleware setup for RTK Query
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(apiSlice.middleware),
   });

   export default store;
   ```

3. **Define an API Slice:**
   Define an API slice using `createApi` from RTK Query. This defines your endpoints and their corresponding fetch functions:
   ```javascript
   import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

   const api = createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://your-api-url.com/' }),
     endpoints: (builder) => ({
       getUsers: builder.query({
         query: () => 'users',
       }),
       // Define other endpoints here
     }),
   });

   export const { useGetUsersQuery } = api;
   export default api;
   ```

4. **Add API Slice to Store:**
   Add the API slice reducer to your store configuration:
   ```javascript
   import { configureStore } from '@reduxjs/toolkit';
   import api from './apiSlice';

   const store = configureStore({
     reducer: {
       [api.reducerPath]: api.reducer,
     },
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(api.middleware),
   });

   export default store;
   ```

5. **Provide the Redux Store:**
   Wrap your application with the `Provider` component from React Redux and pass your Redux store:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './app/store';
   import App from './App';

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

6. **Use the RTK Query Hooks:**
   In your components, use the generated hooks from RTK Query to fetch data and access loading and error states:
   ```javascript
   import React from 'react';
   import { useGetUsersQuery } from './apiSlice';

   const UsersList = () => {
     const { data, error, isLoading } = useGetUsersQuery();

     if (isLoading) return <div>Loading...</div>;
     if (error) return <div>Error: {error.message}</div>;

     return (
       <ul>
         {data.map((user) => (
           <li key={user.id}>{user.name}</li>
         ))}
       </ul>
     );
   };

   export default UsersList;
   ```

With RTK Query, you can define your API endpoints and fetch data in a more declarative way, without the need for writing complex action creators or reducers. It also provides built-in caching and automatic refetching, making data management more efficient and scalable in Redux applications.

## Chapter 7

- in this form is created using react and redux.

React Redux Forms is a library that integrates React with Redux to manage form state in a Redux store. It provides a way to create forms in React components and connect them to the Redux store to manage form data and state changes.

To use React Redux Forms, you typically define your form fields as components and use the `Field` component provided by React Redux Forms to connect them to the Redux store. This allows you to access and update form values through the Redux store, making it easier to manage form state across your application.

Here's a basic example of how you might use React Redux Forms to create a simple form:

```jsx
import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Define a form component
let SimpleForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Decorate the form component to connect it to the Redux store
SimpleForm = reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);

export default SimpleForm;
```

In this example, we define a `SimpleForm` component with two input fields for first name and last name. We use the `Field` component to connect each input field to the Redux store, specifying the `name` prop as the key to use in the Redux store for this field.

We then use the `reduxForm` higher-order component to wrap our `SimpleForm` component, providing a unique identifier (`form: 'simple'`) for this form. This creates a Redux-form-connected component that can be used in our application to manage form state.

You can then render the `SimpleForm` component in your application and handle form submission using the Redux store to manage form state.

## Chapter 8

- here we learn about authentication and authorization
- Authentication and authorization are two related but distinct concepts in the context of security and access control in software systems.

1. **Authentication**:
   - Authentication is the process of verifying the identity of a user or system.
   - It ensures that the user or system is who or what it claims to be.
   - Common authentication methods include:
     - **Username and Password**: The user provides a username and a password, which are compared against a database of authorized users.
     - **Token-based Authentication**: The user provides a token (e.g., JSON Web Token or JWT) that verifies their identity.
     - **OAuth**: A protocol for token-based authentication that allows users to access resources on one site using their credentials from another site.
   - Once authentication is successful, the user is considered authenticated and can access the system or resources.

2. **Authorization**:
   - Authorization is the process of determining whether a user or system is allowed to access a particular resource or perform a particular action.
   - It is based on the identity established during authentication and the permissions associated with that identity.
   - Authorization is often implemented using roles or permissions:
     - **Roles**: A role defines a set of permissions that determine what actions a user can perform.
     - **Permissions**: Permissions specify what actions are allowed or denied for a specific resource.
   - Authorization ensures that users can only access the resources and perform the actions that they are allowed to based on their identity and permissions.

In summary, authentication verifies the identity of a user or system, while authorization determines what resources and actions a user or system is allowed to access based on their identity and permissions. Both are crucial components of security and access control in software systems.

JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

JWTs can be used to securely transmit information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs are commonly used for authentication and information exchange in web development.

A JWT typically consists of three parts separated by dots (e.g., `xxxxx.yyyyy.zzzzz`):

1. **Header**: Contains metadata about the type of token and the signing algorithm being used.
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
3. **Signature**: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

JWTs are often used in authentication mechanisms. When a user logs in, the server generates a JWT and sends it back to the client. The client then includes this JWT in subsequent requests to access protected resources. The server can verify the JWT to ensure that the client is authenticated and determine the user's identity and permissions based on the JWT claims.

