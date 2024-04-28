import { useEffect, useState } from "react";

export default function Password() {
  const [Password, setPassword] = useState("");
  const [color, setColor] = useState({
    svn: "black",
    upp: "black",
    low: "black",
    num: "black",
    spl: "black",
  });

  useEffect(() => {
    setColor({
      svn: Password.length > 6 ? "green" : "red",
      upp: /[A-Z]/g.test(Password) ? "green" : "red",
      low: /[a-z]/g.test(Password) ? "green" : "red",
      num: /[0-9]/g.test(Password) ? "green" : "red",
      spl: /[!@#$%^&*]/g.test(Password) ? "green" : "red",
    });
  }, [Password]);
  return (
    <>
      <div className="container">
        <main>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <ul>
            <h1 style={{ color: color.svn }}>Contains Seven Or More</h1>
            <h1 style={{ color: color.upp }}>Contains Upper</h1>
            <h1 style={{ color: color.low }}>Contains Lower</h1>
            <h1 style={{ color: color.num }}>Containss Number</h1>
            <h1 style={{ color: color.spl }}>Contains Special</h1>
          </ul>
        </main>
        <div className="output">
          <h1>{Password}</h1>
        </div>
      </div>
    </>
  );
}
