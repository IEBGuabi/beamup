import express from "express";
import cors from "cors";

async function startServer() {
  const app = express();
  app.use(cors());

  app.get("/api/hello", (_, res) => {
    res.json({ message: "Hello from Server 🎉" });
  });

  const port = 3016;
  app.listen(port, () => {
    console.log(`✅ Server rodando em http://localhost:${port}`);
  });
}

startServer();
