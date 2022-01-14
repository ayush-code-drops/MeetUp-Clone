import React,{createContext,useEffect,useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    var [location,setLocation] = useState("");
    var [name,setName] = useState("");

    return <AppContext.Provider value={{location,setLocation,name,setName}}>{children}</AppContext.Provider>
}

// [location,name]