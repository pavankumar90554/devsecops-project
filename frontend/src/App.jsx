import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.text())
      .then(data => setMsg(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Connected 🚀</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
