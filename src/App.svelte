<main>
	<Header />
	<Router {routes}/>
</main>

<style lang="scss">
	@import './styles/styles.scss';
</style>

<script>
import Portfolio from './routes/Portfolio.svelte';
import Merits from './routes/Merits.svelte';
import Home from './routes/Home.svelte';
import Header from './components/Header.svelte';
import Router from 'svelte-spa-router';

const routes = {
'/': Home,
'/experience': Merits,
'/projects': Portfolio,
}
</script>