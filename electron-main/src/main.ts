import { app, BrowserWindow } from 'electron';
import path from 'path';
import { spawn } from 'child_process';

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
let serverProc: any = null;

async function startServerIfNeeded() {
  if (!isDev) {
    // production: start the compiled server JS
    const serverPath = path.join(__dirname, '..', '..', 'server', 'dist', 'index.js');
    serverProc = spawn(process.execPath, [serverPath], { stdio: 'inherit' });
  } else {
    console.log('Dev mode: start server separately (ts-node-dev) for faster reload.');
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 800,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });

  const url = isDev ? 'http://localhost:5174' /* operador dev port */ : `http://localhost:${PORT}/operator`;
  win.loadURL(url);
}

app.on('ready', async () => {
  await startServerIfNeeded();
  createWindow();
});

app.on('window-all-closed', () => {
  if (serverProc) serverProc.kill();
  if (process.platform !== 'darwin') app.quit();
});
