/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import VueChatScroll from 'vue-chat-scroll';
 import VueTimeago from 'vue-timeago';

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

 Vue.use(VueChatScroll);
 // Vue.component('example-component', require('../assets/js/components/ExampleComponent.vue').default);
 Vue.component('chat-room' , require('../assets/js/components/laravel-video-chat/ChatRoom.vue').default);
 Vue.component('group-chat-room', require('../assets/js/components/laravel-video-chat/GroupChatRoom.vue').default);
 Vue.component('video-section' , require('../assets/js/components/laravel-video-chat/VideoSection.vue').default);
 Vue.component('file-preview' , require('../assets/js/components/laravel-video-chat/FilePreview.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueTimeago, {
     name: 'timeago', // component name, `timeago` by default
     locale: 'en-US',
     // locales: {
     //     'en-US': require('vue-timeago/locales/en-US.json')
     // }
})

const app = new Vue({
    el: '#app',
});
