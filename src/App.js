import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [isLogged, setIsLogged] = useState();
  return (
    <div className="App">
      {isLogged ? (
        <Display setIsLogged={setIsLogged} />
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
