import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/main.css';

import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

const MOUNT_EL_ID = 'as-dark-pita';

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = '';
}

mountEl = document.createElement('div');
mountEl.setAttribute('id', MOUNT_EL_ID);
document.body.appendChild(mountEl);

const app = createApp(App).mount(mountEl);

// console.log('hello from content');
// chrome.runtime.onMessage.addListener((message) => {
//   if (message.toggleVisible) {
//     app.visible = !app.visible;
//   }
// });
