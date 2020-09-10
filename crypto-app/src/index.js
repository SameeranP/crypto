// const { app, BrowserWindow, Menu } = require('electron')
// // Launching new window in electron
// const electron = require('electron')
// const path = require('path')
// const shell = require('electron').shell
// // const BrowserWindow = electron.remote.BrowserWindow()
// // const key = 
// // function ourwindow(){
// //     const modalPath = path.join('file://', __dirname, 'add.html')
// //     let win =  new BrowserWindow({
// //         webPreferences: {
// //         nodeIntegration: true
// //         },
// //         frame: false, transparent: true, alwaysOnTop: true,
// //         width: 400,
// //         height: 200
// //         });
// //     win.on('close', function () { win = null })
// //     win.loadURL(modalPath)
// //     win.show()
// //     win.loadFile('src/add.html')
// //   }
 
// var xyz = localStorage.getItem("key");
// console.log(xyz)
// if(xyz){

// function ourwindow(){
    
//     const modalPath = path.join('file://', __dirname, 'add.html')
//     let win =  new BrowserWindow({
//         webPreferences: {
//         nodeIntegration: true
//         },
//         frame: false, transparent: true, alwaysOnTop: true,
//         width: 400,
//         height: 200
//         });
//     win.on('close', function () { win = null })
//     win.loadURL(modalPath)
//     win.show()
//   }
// }
// ourwindow()
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell

// global reference of window object, without this window will be closed automatically when the JS object is garbage collected
//let win 

var notifyBtn = document.getElementById('notifyBtn');
// console.log(notifBtn)
if(notifyBtn){
notifyBtn.addEventListener('click', 
function(event){
    console.log('click')
  const modalPath = path.join('file://', __dirname, 'add.html')
  let win =  new BrowserWindow({
      webPreferences: {
      nodeIntegration: true
      },
      frame: false, transparent: true, alwaysOnTop: true,
      width: 400,
      height: 200
      });
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()

})}