const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#2e3440',
            symbolColor: '#d8dee9'
        },
        icon: 'favicon/favicon.ico'

    })

    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})

app.on = function (windowAllClosed, param2) {

}
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
