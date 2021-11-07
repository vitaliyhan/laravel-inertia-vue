import Layout from "./Shared/Layout";

require('./bootstrap');

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout
        return page
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mixin({methods: {route: window.route}})
            .mount(el)
    },
})
