<script>
	import { page } from '$app/stores';
	import celeritasAppsLogo from '$lib/images/celeritas-apps.png';
  import './header.css'
  import { base } from '$app/paths';
</script>

<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class={$page.url.pathname === '/' ? 'active-home' : 'home'}>
  <a href="{base}/" aria-label="Celeritas Apps"><img src={celeritasAppsLogo} class="home-img" alt="Celeritas Apps Logo"> Celeritas Apps</a>
</li>