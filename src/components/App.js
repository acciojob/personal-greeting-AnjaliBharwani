
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        let [name,setName] = useState("");

        <p>Enter your name:</p>
        <input type="text" onChange={(e)=> setName(e.target.value)}/>

        {
          name &&
          <p>Hello {name}!</p>
        }
    </div>
  )
}

export default App
