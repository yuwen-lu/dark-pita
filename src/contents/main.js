import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/main.css';
import mitt from 'mitt';

const MOUNT_EL_ID = 'as-dark-pita';

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = '';
}

mountEl = document.createElement('div');
mountEl.setAttribute('id', MOUNT_EL_ID);
document.body.appendChild(mountEl);

const app = createApp(App);
console.log('content is working');

app.config.globalProperties.emitter = mitt();
console.log('emitter is working');

const vm = app.mount(mountEl);

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'URL_CHANGED') {
    console.log('app reload');
    app.reload = app.reload + 1;
    location.reload();
  } else if (message.toggleConsole) {
    vm.isConsole = !vm.isConsole;
    console.log('toggle console');
  }
});
