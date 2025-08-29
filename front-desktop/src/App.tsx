import { useState, useEffect } from "react";

function App() {
  const [serverUrl, setServerUrl] = useState("");
  const [presenterUrl, setPresenterUrl] = useState("");

  useEffect(() => {
    // Mock: aqui futuramente podemos ler config.json ou IPC
    setServerUrl("http://localhost:4000/api/hello");
    setPresenterUrl("http://localhost:5173");
  }, []);

  return (
    <div>
      <h1>DESKTOP APP</h1>
      <p>API Server: {serverUrl}</p>
      <p>Presenter App: {presenterUrl}</p>
    </div>
  );
}

export default App;
