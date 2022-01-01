const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        // 브라우저 창을 생성한다.
        width: 400,
        height: 40,
        show: true,
        alwaysOnTop: true,
        frame: false,
        titleBarStyle: "hidden",
        visibleOnAllWorkspaces: true,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile("../index.html"); // index.html 파일을 불러온다.
}

app.whenReady().then(createWindow);
