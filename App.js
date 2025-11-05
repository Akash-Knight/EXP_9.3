import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(d => setData(d.message))
      .catch(() => setData("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>🚀 Full-Stack App on AWS</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
