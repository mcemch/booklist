/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.prototype.$http_api = 'http://booklist.local/api/';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import App from './components/App'
import Booklist from './components/Booklist'
import Add from './components/Add'
import Edit from './components/Edit'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'booklist',
            component: Booklist
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        }
    ],
});



const app = new Vue({
    el: '#app',
    components: { App },
    router,

});
