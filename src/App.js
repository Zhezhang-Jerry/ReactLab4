import CardShowCase from "./CardShowcase";
import CreateCard from "./CreateCard";
import "./styles.css";
import { createContext, useContext, useState } from "react";
import { Router, Outlet, ReactLocation } from "react-location";


const formDataContext = createContext();

export const useFormData = () => {
  const context = useContext(formDataContext);
  return context;
};

const location = new ReactLocation();

const App = () => {
  const [userObj, setUserObj] = useState({});

  const routes = [
    {
      path: "/",
      element: <CreateCard />
    },
    {
      path: "showcase",
      element: <CardShowCase />
    }
  ]

  return (
    <Router routes={routes} location={location}>
      <formDataContext.Provider value={{userObj, setUserObj}}>
        <Outlet />
      </formDataContext.Provider>

    </Router>
  );
}

export default App;
