import React from 'react';

//It create a Context Object
//a context object, as a name state is a data type of an object that can be used to store information that can be shared to othe components with in the app.
//we used this to avoid the use of prop-drilling
const UserContext = React.createContext();

//Provider component - it allows the other component to consume/use the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider;



export default UserContext;