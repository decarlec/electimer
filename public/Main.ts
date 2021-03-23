const {app, BrowserWindow} = require('electron');
const path = require('path');      

function createWindow () {      
    
    // Create the browser window.     
    const win = new BrowserWindow({width: 800, height: 600}); 
         
    // and load the index.html of the app.
    win.loadURL('http://localhost:3000/')     
    //win.loadURL(`file://${path.join(__dirname, '../src/index.tsx')}`)   
}      
  
  app.on('ready', createWindow);

  