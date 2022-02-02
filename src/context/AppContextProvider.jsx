import React,{createContext,useEffect,useState} from 'react';
import eventslog from '../eventsdata.json'
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    var [location, setLocation] = useState("");
    var [data,setData]=useState(eventslog)
    var [name,setName] = useState("");

    return <AppContext.Provider value={{location,setLocation,name,setName,data,setData}}>{children}</AppContext.Provider>
}

// [location,name]