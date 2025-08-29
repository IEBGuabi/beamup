import { useState, useEffect } from "react";

function App() {
  const [serverUrl, setServerUrl] = useState("");

  useEffect(() => {
    // Simulação: no futuro podemos puxar do Electron ou config.json
    setServerUrl("http://localhost:4000/api/hello");
  }, []);

  return (
    <div>
      <h1>APP WEB (Presenter)</h1>
      <p>API Server: {serverUrl}</p>
    </div>
  );
}

export default App;
