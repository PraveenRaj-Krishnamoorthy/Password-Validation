import { useState } from "react";

export default function Password() {
  const [pass, setPass] = useState("");
  const [eight, setEight] = useState("Eight");
  const [upp, setUpp] = useState("Upp");
  const [low, setLow] = useState("Low");
  const [num, setNum] = useState("Num");
  const [spl, setSpl] = useState("Spl");
  
  const verify = (e) => {
    let received = e.target.value;
    setPass(received);
    if (pass.length>=7) {
        
    }
  };

  return (
    <>
      <input type="password" onChange={verify} />
      <h1>Password {pass}</h1>
      <div className="condition">
        <ul>
          <li value={eight}>Eight</li>
          <li value={upp}>Upp</li>
          <li value={low}>Low</li>
          <li value={num}>Num</li>
          <li value={spl}>Spl</li>
        </ul>
      </div>
    </>
  );
}
