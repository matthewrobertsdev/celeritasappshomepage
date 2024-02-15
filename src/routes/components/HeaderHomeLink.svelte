<script>
	import { page } from '$app/stores';
	import celeritasAppsLogo from '$lib/images/celeritas-apps.png';
  import './header.css'
</script>

<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class={$page.url.pathname === '/' ? 'active-home' : 'home'}>
  <a href="/"><img src={celeritasAppsLogo}> Celeritas Apps</a>
</li>