// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


function createNotificationByTitle (title) {
    let myNotification = new Notification(title, {
        body: '通知正文内容'
    })

    myNotification.onclick = () => {
        console.log('通知被点击')
    }
}


createNotificationByTitle('标定')