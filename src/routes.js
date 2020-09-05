import {wrap} from 'svelte-spa-router'
import About from './routes/About.svelte'
import Home from './routes/Home.svelte';
import App from 'App.svelte'
const routes = {
    '/': Home,
    
    '/about': About,
}


export default routes