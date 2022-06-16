import CardShowCase from "./CardShowcase";
import CreateCard from "./CreateCard";
import "./styles.css";
import { useState } from "react";
import { Router, Outlet, Location} from "react-location";

const App = () => {
  const [userObj, setUserObj] = useState({});
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <CreateCard userObj={userObj} setUserObj={setUserObj}/>
    </div>
  );
}

export default App;
