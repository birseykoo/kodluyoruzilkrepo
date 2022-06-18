import { useEffect, useContext, useState, createContext } from "react";
import Context from './Context';

const Context = createContext();

export const LocalContext = ({ children }) => {
    useContext(Context);

    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log('search', search);
    }, [search]);

    return (
        <Context.Provider value={{ search, setSearch }}>
            {children}
        </Context.Provider>
    );
}









// const city ="Samsun";
// const api ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup=metric&key=47VYVQ6ZVS95HUR9C9VHUQ3WB&contentType=json"


//  useEffect(() => {
//    fetch(api)
//      .then(res => res.json())
//      .then(data => {
//        console.log(data);
//      }
//      )
//  }, []);
 