import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext();

export const ContextProviderApp = ({children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async() => {
      let tokenLS = localStorage.getItem("token");

      if (!tokenLS) {
        setUser(null);
        return; //consultar con Santi
      }

      try {
        let res = await axios.get('http://localhost:4000/api/getUser', {headers: {Authorization: `Bearer ${tokenLS}`}});
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);

  const logout = (navigate) => {
    localStorage.removeItem("token");
    setUser(null);
    navigate('/');
  }

  return (
    <GlobalContext.Provider value={{user, setUser, logout}}>
      {children}
    </GlobalContext.Provider>
  )
}
