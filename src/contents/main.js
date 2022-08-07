import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/main.css';

const MOUNT_EL_ID = 'as-dark-pita';

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = '';
}

mountEl = document.createElement('div');
mountEl.setAttribute('id', MOUNT_EL_ID);
document.body.appendChild(mountEl);

const app = createApp(App).mount(mountEl);

console.log('content is working');
// chrome.runtime.onMessage.addListener((message) => {
//   if (message.toggleVisible) {
//     app.isAlert = !app.isAlert;
//   }
// });

chrome.runtime.onMessage.addListener((message) => {
  // console.log(message);
  if (message.type === 'URL_CHANGED') {
    app.reload = app.reload + 1;
  }
});
