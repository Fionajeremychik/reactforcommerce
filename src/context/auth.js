import { useState, createContext, useContext } from "react";
//import axios from "axios";

// Context API could be considered a better choice. 
// At the same time, Redux is better if working on an app with many components,
// complicated inter-dependencies, dealing with unique features like undo/redo and requiring advanced debugging capabilities
// https://www.scalablepath.com/react/context-api-vs-redux
// React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
// In other words, React context allows us to share data (state) across our components more easily.
const AuthContext = createContext();

// children is a prop
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({user: null,token: "",});
    // put the value that we want to pass down the entire component tree
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
// const [auth, setAuth] = useAuth()

export { useAuth, AuthProvider};