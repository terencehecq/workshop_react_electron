//* Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
require("electron-reload")(__dirname);

//! Keep a global reference of the window object, if you don't, the window will
//! be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  //? Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 800,
    minHeight: 480,
    show: true,

    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  //? Closed window event
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

//* HANDLE LAUCNH AND QUIT APP
//? Doing the folling action when app is ready
app.on("ready", () => {
  //? set window
  createWindow();
  mainWindow.maximize();
});
//? Quit when all windows are closed.
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) createWindow();
});
