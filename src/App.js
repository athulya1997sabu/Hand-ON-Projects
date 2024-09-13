import React from "react";
import "./App.css";

function App() {
  const age = [26, 30, 33];
  const name = ["Athulya", "Athira", "Athulya", "Vedhika", "Mini", "Ushar"];
  const myFunction = (value, index, array) => {
    return value > 27;
  };
  let first = age.find(myFunction);
  let firstIndex = age.findIndex(myFunction);
  let lastIndex = age.findLast(myFunction);
console.log("first",first,firstIndex,lastIndex)
  return (
    <div>
      <ul>
        {name.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>Index of Athulya : {name.indexOf("Athulya")}</p>
      <p>lastIndexOf of Athulya : {name.lastIndexOf("Athulya")}</p>
      <p>Position of Athulya : {name.indexOf("Athulya") + 1}</p>
      <p>{name.indexOf("Cin")}</p>
      <p>{name.indexOf("Athulya", 1)}</p>
      <p>{name.includes("Athira")}</p>
    </div>
  );
}
export default App;
